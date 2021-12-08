import { StatusBar } from "expo-status-bar";
import React from "react";
import {Ionicons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import HomeScreen from "../screens/HomeScreen";
import Picsum from "./Picsum";
import HomePokeApi from "./HomePokeApi";

export default function Home({navigation,route}) {

  const [auth,setAuth] = React.useState('');

  React.useEffect(() =>{
    setAuth(route.params.auth);
  },[])
  


  return (
   
      

      <Drawer.Navigator initialRouteName={"HomeScreen"}
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

        <Drawer.Screen name="HomeScreen" component={HomeScreen} 
                       options={{   title:'Home',
                         drawerIcon: ({focused, size}) => (
                                    <Ionicons name="home" size={size} color={focused ? 'black' : '#ccc'}/> ), }}
                       initialParams={{auth: auth}} />

        <Drawer.Screen name="Picsum" component={Picsum}
                       options={{  headerShown: false, 
                                   drawerIcon: ({focused, size}) => (
                                    <Ionicons name="md-images" size={size} color={focused ? 'black' : '#ccc'}/> ),
                       }} />
        <Drawer.Screen name="HomePokeApi" component={HomePokeApi}
                       options={{  headerShown: false,
                                   drawerIcon: ({focused, size}) => (
                                    <MaterialCommunityIcons  name="pokeball" size={size} color={focused ? 'black' : '#ccc'}/> ),
                       }} /> 

      </Drawer.Navigator>

  );
}
