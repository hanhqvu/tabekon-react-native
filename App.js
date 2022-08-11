import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./routes/MainScreen";
import WelcomeScreen from "./routes/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	//Handler

	return (
		<SafeAreaView style={styles.app}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Welcome" component={WelcomeScreen} />
					<Stack.Screen
						name="Main"
						component={MainScreen}
						options={{
							headerBackVisible: false,
						}}
					/>
				</Stack.Navigator>
				{/* <View style={styles.container}>
					<Appbar.Header mode="center-aligne">
						<Appbar.Content title="Tabekon" />
					</Appbar.Header>
				</View> */}
				<StatusBar style="auto" />
			</NavigationContainer>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		flexDirection: "column",
	},
});
