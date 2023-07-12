import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const CostomNavigation = ({ navigation }) => {
	const [selectedTab, setSelectedTab] = useState(false);
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("home");
					setSelectedTab(true);
				}}
			>
				{selectedTab ? (
					<Image
						source={require("../../assets/images/home-outline.png")}
						style={styles.img}
					/>
				) : (
					<Image
						source={require("../../assets/images/home-fill.png")}
						style={styles.img}
					/>
				)}
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					backgroundColor: "green",
					width: 70,
					height: 70,
					borderRadius: 35,
					alignItems: "center",
					justifyContent: "center",
					marginBottom: 5,
				}}
				onPress={() => {
					navigation.navigate("Create Blog");
					setSelectedTab(true);
				}}
			>
				<Image
					source={require("../../assets/images/plus.png")}
					style={styles.img}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("home");
					setSelectedTab(true);
				}}
			>
				{selectedTab ? (
					<Image
						source={require("../../assets/images/search-outline.png")}
						style={styles.img}
					/>
				) : (
					<Image
						source={require("../../assets/images/search-fill.png")}
						style={styles.img}
					/>
				)}
			</TouchableOpacity>
		</View>
	);
};

export default CostomNavigation;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		bottom: 0,
		height: 50,
		justifyContent: "space-around",
		backgroundColor: "white",
		position: "absolute",
		flexDirection: "row",
		alignItems: "center",
	},
	img: {
		width: 30,
		height: 30,
	},
});
