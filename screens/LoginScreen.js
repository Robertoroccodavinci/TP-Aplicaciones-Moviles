import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , Button} from "react-native";
import * as Google from 'expo-auth-session/providers/google'


export default function LoginScreen ({navigation}) {
  
  const[request,response,promptAsync] = Google.useAuthRequest({
    expoClientId: '818602706345-7av2eir6q8e55djmpjoc6633093ak7bq.apps.googleusercontent.com'
   
  });

  React.useEffect(() =>{
    if(response?.type === 'success' ){
      //console.log(response.authentication);
      navigation.navigate("Home", {auth: response.authentication} );
    }
  },[response])


  return (
    <View style={{ flex: 1, backgroundColor: "#dae0e9", alignItems: "center", justifyContent:'center' }} >
      
      <StatusBar hidden/>
      
      {/* BOTON INICIAR SESION */}
      <TouchableOpacity onPress={() => { promptAsync(); }} title="Iniciar" 
                        style={{ backgroundColor: "#5c6bc0",  borderRadius: 20, elevation:10, padding: 5, margin: 5 }} >

        <Text style={{ padding: 10,  fontSize: 25, fontWeight: "bold",color:'white' }}>Iniciar Sesión</Text>

      </TouchableOpacity> 

    </View>
  );
 
}
