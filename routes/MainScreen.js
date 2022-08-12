import React, { useState, useEffect, useRef } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	FlatList,
	Animated,
} from "react-native";
import { Button, Surface, Headline } from "react-native-paper";
import axios from "axios";
import _ from "underscore";

const ImageWidth = Math.ceil(Dimensions.get("window").width * 0.8);
const FullWidth = Dimensions.get("window").width * 0.9;

export default function MainScreen() {
	//State
	const [japanese, setJapanese] = useState([]);
	const [chosenIndex, setChosenIndex] = useState([]);

	//Effect
	useEffect(() => {
		(async () => {
			const res = await axios.get("https://tabekon.herokuapp.com/api/japanese");
			setJapanese(_.shuffle(res.data));
		})();
	}, []);

	//Ref
	const scrollX = useRef(new Animated.Value(0)).current;

	//Handler
	function capitalize(string) {
		const firstChar = string[0].toUpperCase();
		const remainChar = string.slice(1);
		return firstChar + remainChar;
	}

	function addOrRemove(key) {
		if (chosenIndex.length === 3 && !chosenIndex.includes(key)) {
			return;
		}
		if (chosenIndex.includes(key)) {
			setChosenIndex(chosenIndex.filter((val) => val !== key));
			return;
		}
		setChosenIndex([...chosenIndex, key]);
	}

	function removeAll() {
		setChosenIndex([]);
	}

	return (
		<>
		<View style={styles.swiper}>
			<Animated.FlatList
				horizontal={true}
				keyExtractor={(item) => item.name}
				data={japanese}
				onScroll={Animated.event([
					{ nativeEvent: { contentOffset: { x: scrollX } } },
				], { useNativeDriver: true })}
				renderItem={({ item, index, separators }) => {
					return (
						<View style={styles.slide}>
							<Surface elevation={5} style={styles.imageContainer}>
								<Image
									source={{
										uri: `https://firebasestorage.googleapis.com/v0/b/tabekon-1915c.appspot.com/o/${item.image_path}?alt=media&token=4d0b63c7-51cd-4d44-ba65-94a94e2b3028`,
									}}
									style={{
										width: ImageWidth,
										height: 300,
										borderRadius: 20,
										resizeMode: "cover",
									}}
								/>
								<View style={{ padding: 15 }}>
									<Headline>{capitalize(item.name)}</Headline>
									<Text>Main Ingredient: {capitalize(item.main_ingredient)}</Text>
									<Text>
										Other Ingredient:
										{item.sub_ingredient ? ` ${capitalize(item.sub_ingredient)}` : "None"}
									</Text>
									<Button
										icon={
											chosenIndex.includes(index) ? "heart" : "heart-outline"
										}
										mode="contained"
										style={{ marginTop: 10 }}
										onPress={() => {
											addOrRemove(index);
										}}
									>
										{chosenIndex.includes(index) ? "Loved" : "Love?"}
									</Button>
								</View>
							</Surface>
						</View>
					);
				}}
			/>
		</View>
		<View style={styles.buttonContainer}>
			<Button
				icon="close-circle-outline"
				mode="contained"
				style={styles.button}
				onPress={() => removeAll()}
			>
				Remove all
			</Button>
			<Button icon="playlist-star" mode="contained" style={styles.button}>
				See list
			</Button>
		</View></>
	);
}

const styles = StyleSheet.create({
	swiper: {
		flex: 8,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "baseline",
	},
	button: {
		alignItems: "center",
	},
	slide: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: FullWidth,
	},
	imageContainer: {
		borderRadius: 20,
		paddingBottom: 10,
	},
});
