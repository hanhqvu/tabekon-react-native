import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export default function WelcomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Welcome</Text>
			<Button mode="contained" onPress={() => navigation.navigate("Main")}>
				To Main
			</Button>
		</View>
	);
}
