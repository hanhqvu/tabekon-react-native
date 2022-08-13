import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export default function WelcomeScreen({ navigation }) {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<View
				style={{
					paddingBottom: 15,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={styles.text}>Are you feeling hungry right now?</Text>
				<Text style={styles.text}>Feeling confused? Don't know what to order?</Text>
				<Text style={styles.text}>Don't worry, our app will help you!</Text>
			</View>
			<Button
				style={{ top: 250 }}
				mode="contained"
				onPress={() => navigation.navigate("Selection")}
			>
				Let's get started
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
	},
});
