import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from "./navigators/Home";
import LoginScreen from "./screens/LoginScreen";

export default function App() {

  return (

    <NavigationContainer>
      <StatusBar hidden />

      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={LoginScreen} options={{  headerShown: false }} />

        <Stack.Screen name="Home" component={Home} options={{  headerShown: false }} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}
