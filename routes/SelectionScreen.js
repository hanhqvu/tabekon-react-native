import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Chip, Button } from "react-native-paper";

export default function Selection({ navigation }) {
	const [selected, setSelected] = useState([]);

	// function toggleSelected() {
	// 	if
	// }

	return (
		<View style={styles.container}>
			<View>
				<Text>Cuisine</Text>
				<Chip id="japanese-chip" mode="outlined" selectedColor="blue">Japanse</Chip>
			</View>
			<Text>Category</Text>
			<Text>Placeholder</Text>
			<Text>Ingredient</Text>
			<Text>Placeholder</Text>
			<Button
				style={{ top: 250 }}
				mode="contained"
				onPress={() => navigation.navigate("Main")}
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
