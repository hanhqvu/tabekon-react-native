import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Chip, Button } from "react-native-paper";
import _ from "underscore";

export default function Selection({ navigation }) {
	const [selected, setSelected] = useState([]);

	const chips = {
		jpn: "Japanese",
		vn: "Vietnamese",
		thai: "Thailand",
	};
	function toggleSelected(key) {
		if (selected.includes(key)) {
			setSelected(selected.filter((value) => value !== key));
			return;
		}
		setSelected([...selected, key]);
	}

	return (
		<View style={styles.container}>
			<Text>Cuisine</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{_.map(chips, (value, index) => {
					return (
						<Chip
							key={index}
							mode="outlined"
							selected={selected.includes(index)}
							onPress={() => toggleSelected(index)}
						>
							{value}
						</Chip>
					);
				})}
			</View>
			<Text>Category</Text>
			<Text>Placeholder</Text>
			<Text>Ingredient</Text>
			<Text>Placeholder</Text>
			<Button
				style={{ top: 250 }}
				mode="contained"
				onPress={() => {
					navigation.navigate("Main", {
						data: selected.map((el) => chips[el]),
					});
				}}
			>
				Selection completed
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
