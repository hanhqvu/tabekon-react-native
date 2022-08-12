import React, { useState, useEffect } from "react";
import Swiper from "react-native-swiper";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Button, Surface, Headline } from "react-native-paper";
import axios from "axios";
import _ from "underscore";

const Width = Math.ceil(Dimensions.get("window").width * 0.9);

export default function MainScreen() {
	//State
	const [japanese, setJapanese] = useState([]);
	const [chosenIndex, setChosenIndex] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	//Effect
	useEffect(() => {
		(async () => {
			const res = await axios.get("https://tabekon.herokuapp.com/api/japanese");
			setJapanese(res.data);
		})();
	}, []);

	//Handler
	function capitalize(string) {
		const firstChar = string[0].toUpperCase();
		const remainChar = string.slice(1);
		return firstChar + remainChar;
	}

	return (
		<>
		<View style={styles.swiper}>
			<Swiper
				style={styles.wrapper}
				showsButtons={true}
				loop={true}
				showsPagination={false}
				onIndexChanged={(index) => setCurrentIndex(index)}
			>
				{_.shuffle(japanese).map((el, index) => {
					return (
						<View key={index} style={styles.slide}>
							<Surface elevation={5} style={styles.imageContainer}>
								<Image
									source={{
										uri: `https://firebasestorage.googleapis.com/v0/b/tabekon-1915c.appspot.com/o/${el.image_path}?alt=media&token=4d0b63c7-51cd-4d44-ba65-94a94e2b3028`,
									}}
									style={{
										width: Width - 20,
										height: 300,
										borderRadius: 20,
									}}
								/>
								<View style={{ paddingLeft: 20 }}>
									<Headline>{capitalize(el.name)}</Headline>
									<Text>Main Ingredient: {capitalize(el.main_ingredient)}</Text>
									<Text>
										Other Ingredient:
										{el.sub_ingredient ? ` ${capitalize(el.sub_ingredient)}` : "None"}
									</Text>
								</View>
							</Surface>
						</View>
					);
				})}
			</Swiper>
		</View>
		<View style={styles.buttonContainer}>
			{_.contains(chosenIndex, currentIndex) ? (
				<Button icon="heart" mode="contained" style={styles.button}>Loved</Button>
			) : (
				<Button icon="heart-outline" mode="contained" style={styles.button}>
					Love?
				</Button>
			)}
			<Button
				icon="close-circle-outline"
				mode="contained"
				style={styles.button}
			>
				Skip
			</Button>
		</View></>
	);
}

const styles = StyleSheet.create({
	swiper: {
		flex: 8,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	button: {
		alignItems: "center",
		margin: 10,
	},
	slide: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		borderRadius: 20,
		paddingBottom: 10,
	},
});
