import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CostomNavigation from "./costom/CostomNavigation";
import Articals from "./costom/Articals";

const Home = () => {
	return (
		<View style={styles.container}>
			<Articals
				img={require("../assets/images/college.jpg")}
				title={"College Memories"}
			/>
			<Articals img={require("../assets/images/hiking.jpg")} title={"Hiking"} />
			<CostomNavigation />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
