import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./routes/MainScreen";
import WelcomeScreen from "./routes/WelcomeScreen";
import ListScreen from "./routes/ListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
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
					<Stack.Screen name="List" component={ListScreen} />
				</Stack.Navigator>
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
