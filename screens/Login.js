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

const Login = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [name, setName] = useState(null);
	const [pic, setPic] = useState(null);
	const [image, setImage] = useState(null);

	const user_photo = require("../assets/images/user-photo.png");

	return (
		<View style={styles.container}>
			<Text style={styles.banner}>Login</Text>

			<TextInput
				placeholder="Email"
				style={[styles.input, { marginTop: 10 }]}
			/>
			<TextInput
				placeholder="Password"
				style={[styles.input, { marginTop: 10 }]}
			/>
			<TouchableOpacity style={styles.RegisterBtn}>
				<Text style={styles.RegisterText}>Login</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	banner: {
		textAlign: "center",
		marginTop: 100,
		marginBottom: 50,
		fontSize: 35,
		fontWeight: "900",
		color: "#a4a4a4",
	},

	input: {
		borderBottomWidth: 1,
		padding: 5,
		width: "90%",
		alignSelf: "center",
		height: 50,
		marginVertical: 20,
	},
	RegisterBtn: {
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		backgroundColor: "#0fa730",
		height: 50,
		borderRadius: 10,
		marginTop: 60,
	},
	RegisterText: {
		fontSize: 22,
		color: "white",
	},
});
