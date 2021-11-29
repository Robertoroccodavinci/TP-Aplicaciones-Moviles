import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FAB } from "react-native-paper";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import PokeList from "../screens/PokeList";
//import PicsumList from "../screens/PicsumList";
//import PicsumDetails from "../screens/PicsumDetails";

export default class PokeApi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator initialRouteName="Lista Pokemon"
                      >
        
        <Tab.Screen name="Lista Pokemon" component={PokeList} />
                           
       {/*  <Tab.Screen name="PicsumList" component={PicsumList} />
        <Tab.Screen name="PicsumDetails" component={PicsumDetails} /> */}
      </Tab.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  fab: {
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#f9a825",
  },
});
