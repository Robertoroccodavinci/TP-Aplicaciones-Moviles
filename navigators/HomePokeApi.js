import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FAB } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import PokeList from "../screens/PokeList";
import PokeApi from "../navigators/PokeApi";



export default class HomePokeApi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="PokeList"
                        screenOptions={{headerStyle: { backgroundColor: "#ffee58", elevation: 5 }, 
                                        headerRight: () => ( <FAB small icon="home" color="#000000" style={styles.fab}
                                                                onPress={() => this.props.navigation.navigate("HomeScreen")} />
                                                        ),
                                        headerTintColor: "#000000",
                                    }} >
        
        <Stack.Screen name="PokeList" component={PokeList}
                      options={{ title:"Lista" , headerLeft:null,
                                 stackIcon: ({focused, size}) => ( <Ionicons name="home" size={size} 
                                                                             color={focused ? 'black' : '#ccc'}
                                                                             />
                                                                  ),
                              }} />

        <Stack.Screen name="PokeApi" component={PokeApi} options={{  headerShown:false }} />

      </Stack.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  fab: {
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#f44336",
    
    elevation:5,
  },
});