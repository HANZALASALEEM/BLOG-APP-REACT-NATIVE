import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Articals = ({ img, title }) => {
	return (
		<View style={styles.container}>
			<Image source={img} style={styles.image} />
			<Text style={styles.title}>{title}</Text>
			<View style={styles.btnContainer}>
				<TouchableOpacity style={styles.RegisterBtn}>
					<Text style={styles.RegisterText}>Edit</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.RegisterBtn}>
					<Text style={styles.RegisterText}>View Blog</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Articals;

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		width: "90%",
		alignSelf: "center",
		height: "50%",
		margin: 10,
		borderRadius: 10,
	},
	image: {
		width: "100%",
		height: "60%",
		resizeMode: "contain",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	title: {
		marginHorizontal: 10,
		marginVertical: 5,
		fontSize: 22,
	},
	btnContainer: {
		flexDirection: "row",
		width: "90%",
		justifyContent: "space-between",
		alignSelf: "center",
	},
	RegisterBtn: {
		width: "40%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		backgroundColor: "#0fa730",
		height: 50,
		borderRadius: 10,
		marginTop: 10,
	},
	RegisterText: {
		fontSize: 18,
		color: "white",
	},
});
