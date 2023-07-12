import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import React, { useState } from "react";

// Image Picker
import * as ImagePicker from "expo-image-picker";

//Firebase
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";

const Register = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [name, setName] = useState(null);
	const [pic, setPic] = useState(null);
	const [image, setImage] = useState(null);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.assets[0].uri);
		}
	};

	const user_photo = require("../assets/images/user-photo.png");

	return (
		<View style={styles.container}>
			<Text style={styles.banner}>Register yourself</Text>
			<TouchableOpacity style={styles.imgBtn} onPress={pickImage}>
				{!image ? (
					<Image source={user_photo} style={styles.img} />
				) : (
					<Image source={{ uri: image }} style={styles.img} />
				)}
			</TouchableOpacity>
			<TextInput placeholder="Name" style={[styles.input, { marginTop: 50 }]} />
			<TextInput
				placeholder="Email"
				style={[styles.input, { marginTop: 10 }]}
			/>
			<TextInput
				placeholder="Password"
				style={[styles.input, { marginTop: 10 }]}
			/>
			<TouchableOpacity style={styles.RegisterBtn}>
				<Text style={styles.RegisterText}>Register</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	banner: {
		textAlign: "center",
		marginTop: 20,
		fontSize: 35,
		fontWeight: "900",
		color: "#a4a4a4",
	},
	imgBtn: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 80,
	},
	img: {
		width: 120,
		height: 120,
	},
	input: {
		borderBottomWidth: 1,
		padding: 5,
		width: "90%",
		alignSelf: "center",
		height: 50,
	},
	RegisterBtn: {
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		backgroundColor: "#bdbd12",
		height: 50,
		borderRadius: 10,
		marginTop: 40,
	},
	RegisterText: {
		fontSize: 22,
		color: "white",
	},
});
