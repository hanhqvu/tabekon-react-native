import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Animated,
	Image,
	Dimensions,
	SafeAreaView,
} from "react-native";
import { Button, Appbar } from "react-native-paper";
import Swiper from "react-native-deck-swiper";

const Width = Math.ceil(Dimensions.get("window").width * 0.9);
const Height = Math.floor(Dimensions.get("window").height * 0.6);
const images = new Array(10).fill(`https://picsum.photos/${Width}/${Height}`);

export default function App() {
	return (
		<SafeAreaView style={styles.app}>
			<View style={styles.container}>
				<Appbar.Header mode="center-aligne">
					<Appbar.Content title="Tabekon" />
				</Appbar.Header>
				<Text style={{ textAlign: "center", marginTop: 5 }}>
					What do you think about this dish?
				</Text>
			</View>
			<StatusBar style="auto" />
			<View style={styles.swiper}>
				<Swiper
					cards={images}
					stackSize={3}
					renderCard={(card) => {
						return (
							<Image
								source={{ uri: card }}
								style={{ width: Width, height: Height }}
							/>
						);
					}}
					backgroundColor="white"
					cardVerticalMargin={35}
				/>
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
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		flexDirection: "column",
	},
	container: {
		height: "10%",
		// backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
	swiper: {
		height: "80%",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	button: {
		alignItems: "center",
		margin: 10,
	},
});
