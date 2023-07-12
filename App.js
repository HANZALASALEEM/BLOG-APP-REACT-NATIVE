import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState } from "react";

//Navigation
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Firebase
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";

//Screens
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import CreateBlog from "./screens/CreateBlog";
import Blog from "./screens/Blog";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
	const [loggedin, setLoggedin] = useState(true);
	const [lodding, setLodding] = useState(false);

	if (lodding) {
		return <ActivityIndicator size={32} color="gray" />;
	}

	if (!loggedin) {
		return (
			<NavigationContainer>
				<Tab.Navigator initialRouteName="Login">
					<Tab.Screen name="Login" component={Login} />
					<Tab.Screen name="Register" component={Register} />
				</Tab.Navigator>
			</NavigationContainer>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Create Blog" component={CreateBlog} />
				<Stack.Screen name="Blog" component={Blog} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

const styles = StyleSheet.create({});
