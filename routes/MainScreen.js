import React, { useState, useEffect } from "react";
import Swiper from "react-native-swiper";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";

const Width = Math.ceil(Dimensions.get("window").width * 0.9);
const Height = Math.floor(Dimensions.get("window").height * 0.6);

export default function MainScreen() {
	//State
	const [japanese, setJapanese] = useState([]);

	//Effect
	useEffect(() => {
		(async () => {
			const res = await axios.get("https://tabekon.herokuapp.com/api/japanese");
			setJapanese(res.data);
		})();
	}, []);

	return (
		<>
		<View style={styles.swiper}>
			<Text style={{ textAlign: "center", marginTop: 5 }}>
				What do you think about this dish?
			</Text>
			<Swiper
				style={styles.wrapper}
				showsButtons={true}
				loop={true}
				showsPagination={false}
			>
				{japanese.map((el, index) => {
					return (
						<View key={index} style={styles.slide}>
							<Image
								source={{
									uri: `https://firebasestorage.googleapis.com/v0/b/tabekon-1915c.appspot.com/o/${el.image_path}?alt=media&token=4d0b63c7-51cd-4d44-ba65-94a94e2b3028`,
								}}
								style={{ width: Width - 50, height: Height - 50 }}
							/>
						</View>
					);
				})}
			</Swiper>
		</View>
		<View style={styles.buttonContainer}>
			<Button
				icon="close-circle-outline"
				mode="contained"
				style={styles.button}
			>
				Skip
			</Button>
			<Button icon="heart" mode="contained" style={styles.button}>Love</Button>
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
		backgroundColor: "#9DD6EB",
	},
});
