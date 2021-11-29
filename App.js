import { StatusBar } from "expo-status-bar";
import React from "react";
import {Ionicons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import HomeScreen from "./screens/HomeScreen";

import Picsum from "./navigators/Picsum";
import HomePokeApi from "./navigators/HomePokeApi";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />

      <Drawer.Navigator initialRouteName="Home"
                        screenOptions={{
                          headerStyle: { backgroundColor: "#5c6bc0", elevation: 5 },
                          headerTintColor: "#fff",
                          drawerStyle: {
                            backgroundColor: '#dce0fb',
                            width: 250,
                          },
                          drawerActiveBackgroundColor: '#ffbb93',
                          drawerActiveTintColor:'black'
                        }} >

        <Drawer.Screen name="Home" component={HomeScreen} 
                       options={{  drawerIcon: ({focused, size}) => (
                                    <Ionicons name="home" size={size} color={focused ? 'black' : '#ccc'}/> ),
                       }} />

        <Drawer.Screen name="Picsum" component={Picsum}
                       options={{  headerShown: false,
                                   drawerIcon: ({focused, size}) => (
                                    <Ionicons name="md-images" size={size} color={focused ? 'black' : '#ccc'}/> ),
                       }} />
        {/* <Drawer.Screen name="HomePokeApi" component={HomePokeApi}
                       options={{  headerShown: false,
                                   drawerIcon: ({focused, size}) => (
                                    <MaterialCommunityIcons  name="pokeball" size={size} color={focused ? 'black' : '#ccc'}/> ),
                       }} /> */}

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
