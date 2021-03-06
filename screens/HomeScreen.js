import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import axios from 'axios';

_GOOGLE_URL = "http://www.googleapis.com/oauth2/userinfo?accesstoken?";

export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        userInfo: null
    }
  }

  componentDidMount(){
    
    let token = this.props.route.params.auth.accessToken;
    this.getUserInfo(token);

  }

  getUserInfo(token){
    
    axios.get(_GOOGLE_URL+token)
    .then(resp => {
      console.log(resp.data);
      this.setState({ userInfo: resp.data});
    }).catch(error => {
      console.log("ERROR");
    })

  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#dae0e9", alignItems: "center" }} >
        
        <StatusBar hidden/>
        
        {/* TITULO */}
        <Text style={{ padding: 5, marginHorizontal: 5, marginVertical: 30, justifyContent: "center", fontSize: 25, fontWeight: "bold" }} >
          Bienvenido a mi Aplicación!!
        </Text>

        {/* DESCRIPCION */}
        <Text style={{ padding: 5, marginHorizontal: 5, marginVertical: 20, justifyContent: "center", fontSize: 18 }} >
          Mi idea es usar estos TPs para curiosiar APIs y librerias de React,
          por lo que las distintas APIs se encontraran en navigators distintos
          usando distintas librerias react-native.
        </Text>
        
        {/* SEPARADOR */}
        <Text style={{ paddingHorizontal: 170, height: 1, backgroundColor: "#000000" }} />
        
        <Text style={{ padding: 5, marginHorizontal: 5, marginVertical: 20, justifyContent: "center", fontSize: 18 }} >
          Elejí la API que quieras consultar
        </Text>

        {/* 
        #############################################
        ############  Botón API Picsum  #############
        #############################################
         */}

        <TouchableOpacity onPress={() => this.props.navigation.navigate("Picsum")}
                          style={{ backgroundColor: "#64b5f6", borderWidth: 3, borderRadius: 20, borderColor:'#f9a825', elevation:4, padding: 5, margin: 5 }} >

          <Text style={{ padding: 5, marginHorizontal: 5, justifyContent: "center", fontSize: 22, fontWeight: "bold" }} >
            Picsum
          </Text>

        </TouchableOpacity>

        {/* 
        #############################################
        ############   Botón PokeAPI   ##############
        #############################################
         */}
         <TouchableOpacity onPress={() => this.props.navigation.navigate("HomePokeApi")} 
                          style={{ backgroundColor: "#ffee58", borderWidth:3, borderRadius: 20, borderColor:'#f44336',elevation:4, padding: 5, margin: 5 }} >

          <Text style={{ padding: 5, marginHorizontal: 5, justifyContent: "center", fontSize: 22, fontWeight: "bold" }}> 
          PokeAPI
          </Text>

        </TouchableOpacity> 

      </View>
    );
  }
}
