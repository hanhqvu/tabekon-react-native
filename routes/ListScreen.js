import { View, Text, FlatList, Dimensions, Image } from "react-native";
import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

const CardWidth = Math.ceil(Dimensions.get("window").width * 0.9);

export default function ListScreen({ route }) {
	const { data } = route.params;

	//Handler
	function capitalize(string) {
		const firstChar = string[0].toUpperCase();
		const remainChar = string.slice(1);
		return firstChar + remainChar;
	}

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<FlatList
				data={data}
				renderItem={({ item, index }) => {
					return (
						<View
							style={{
								flex: 1,
								justifyContent: "center",
								alignContent: "center",
							}}
						>
							<Card
								key={index}
								elevation={5}
								mode="contained"
								style={{ width: CardWidth, marginTop: 20 }}
							>
								<Card.Cover source={{ uri: "https://picsum.photos/700" }} />
								<Card.Title title={capitalize(item.name)} />
								<Card.Content>
									{/* <Title>{item.name}</Title> */}
									<Paragraph>Card content</Paragraph>
								</Card.Content>
							</Card>
						</View>
					);
				}}
			/>
			{/* <Image
				source={{ uri: "https://picsum.photos/700" }}
				style={{ width: 200, height: 300 }}
			/> */}
		</View>
	);
}
