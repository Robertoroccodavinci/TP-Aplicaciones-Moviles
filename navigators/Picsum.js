import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FAB } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import APIPicsum from "../screens/APIPicsum";
import PicsumList from "../screens/PicsumList";
import PicsumDetails from "../screens/PicsumDetails";

export default class Picsum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator
        initialRouteName="APIPicsum"
        screenOptions={{
          headerStyle: { backgroundColor: "#64b5f6", elevation: 5 },
          headerRight: () => (
            <FAB
              onPress={() => this.props.navigation.navigate("HomeScreen")}
              small              
              icon="home"
              color="#000000"
              style={styles.fab}
            />
          ),
          headerTintColor: "#000000",
        }}
      >
        <Stack.Screen name="APIPicsum" component={APIPicsum}
                      options={{ title:'API Picsum Home ',
                            headerLeft:null,
                            drawerIcon: ({focused, size}) => (
                            <Ionicons
                            name="home"
                            size={size}
                            color={focused ? 'black' : '#ccc'}/>
                            ),
                      }} 
        />
        <Stack.Screen name="PicsumList" component={PicsumList} options={{ title:'Lista' }} />
        <Stack.Screen name="PicsumDetails" component={PicsumDetails} options={{ title:'Detalles' }} />
      </Stack.Navigator>
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
