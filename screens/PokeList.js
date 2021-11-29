import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,Text,View,ScrollView } from "react-native";
import { Card } from "react-native-elements";
import axios from 'axios';
var count=1;

export default class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state={ datos:[],
                 pokemons:[],
                 url: "https://pokeapi.co/api/v2/pokemon/?limit=20",
                 estadoLista: false,
                 estadoData: false,
                 estado: 0,
                 cont:1
    };
    this.fetchPokeList = this.fetchPokeList.bind(this);
    //this.fetchPokeData = this.fetchPokeData.bind(this);
    
  }

  componentDidMount() {
    this.fetchPokeList();
  }
  fetchPokeList = async () => {
    let arr = [];
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
    .then((response) => response.json())
    .then((data) => this.setState({datos: data.results}) )
    
    
    
  }
  /* fetchPokeData({values:[]}){
    let pokeData = [];
    values.map( element =>{
      axios
      .get(element.url )
      .then((response) => {
        pokeData.push(responsedata);
      })
      .catch(function (error) {
        console.log(error);
        throw error;
      });

      });
      this.setState({datos: pokeData});
  } */

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#dae0e9", alignItems: "center" }} >
        <ScrollView>
        
        <StatusBar hidden/>
          <View style={styles.conexioncontainer}>
            <Text style={styles.conexion}>{(this.state.estado===200)? 'Conexion exitosa':(this.state.estado>400)? 'ERROR':'Conectando con la API!'}</Text>
            <Text style={styles.conexion}>{(this.state.estado===200)? 'Imprimiento informacion':(this.state.estado>400)? 'ERROR':'Esperando respuesta'}</Text>
          </View>  

        {/* TITULO */}
        <Card>
          <Card.Title style={{ padding: 5, marginHorizontal: 5, marginVertical: 30, justifyContent: "center", fontSize: 25, fontWeight: "bold" }}>
          Bienvenido a la Lista Pokemon!!{this.state.datos.forEach((element) => element.name.toString())}
          </Card.Title>
        </Card>
                
         {this.state.datos.map( (element) => (
           
          <Card>
            <Card.Title style={{ padding: 5, marginHorizontal: 5, marginVertical: 30, justifyContent: "center", fontSize: 25, fontWeight: "bold" }}>
            {element.name}
            
            </Card.Title>
            <Card.Image source={{uri:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+(count++)+".gif"}}
                        style={{height:100, width:100, marginLeft:50}}
            />
            {// GLOBAL VARIABLES
            }
          </Card>
           
            
          ))}  
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6EAF0",
    padding: 8,
  },
  conexion: {
    fontSize: 15,
    alignContent: "center",
    color: "#66ff00",
    paddingLeft: 20,
  },
  conexioncontainer: {
    fontSize: 15,
    alignContent: "center",
    margin: 5,
    backgroundColor: "#040505",
    borderWidth: 1,
    borderRadius: 20,
  },
});
