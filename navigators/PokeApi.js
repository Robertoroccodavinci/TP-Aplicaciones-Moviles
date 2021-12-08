import React from "react";
import { StyleSheet, Text, View, Button,Image } from "react-native";
import { FAB } from "react-native-paper";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import PokeDetails from "../screens/PokeDetails";
import PokeGaleria from "../screens/PokeGaleria";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PokeApi extends React.Component { 
  
  constructor(props) {
    super(props);
    this.state ={ datos: this.props.route.params.datos,
                  stats: this.props.route.params.datos.stats,
                  tipo: this.props.route.params.datos.types,
                  nombre: this.props.route.params.datos.name,
                  fondo: "",
                  elementos: {  "normal":   { name:'Normal',      color:'#e5e5e5', img: require('../icon/normal.png') },
                                "fighting": { name:'Lucha',       color:'#b54646', img: require('../icon/fighting.png') },
                                "flying":   { name:'Volador',     color:'#d8daf5', img: require('../icon/flying.png') },
                                "poison":   { name:'Veneno',      color:'#a296c0', img: require('../icon/poison.png') },
                                "ground":   { name:'Tierra',      color:'#d2b14c', img: require('../icon/ground.png') },
                                "rock":     { name:'Roca',        color:'#987f32', img: require('../icon/rock.png') },
                                "bug":      { name:'Bicho',       color:'#8ABD16', img: require('../icon/bug.png') },
                                "ghost":    { name:'Fantasma',    color:'#875ab2', img: require('../icon/ghost.png') },
                                "steel":    { name:'Metal',       color:'#d0d0d0', img: require('../icon/steel.png') },
                                "fire":     { name:'Fuego',       color:'#e89c4b', img: require('../icon/fire.png') },
                                "water":    { name:'Agua',        color:'#75b1de', img: require('../icon/water.png') },
                                "grass":    { name:'Hierba',      color:'#8DD16F', img: require('../icon/grass.png') },
                                "electric": { name:'Electrico',   color:'#ffdb75', img: require('../icon/electric.png') },
                                "psychic":  { name:'Psiquico',    color:'#e5bece', img: require('../icon/psychic.png') },
                                "ice":      { name:'Hielo',       color:'#89d0e5', img: require('../icon/ice.png') },
                                "dragon":   { name:'Dragon',      color:'#817fb9', img: require('../icon/dragon.png') },
                                "dark":     { name:'Oscuro',      color:'#2f2f2f', img: require('../icon/dark.png') },
                                "fairy":    { name:'Hada',        color:'#EAD1DC', img: require('../icon/fairy.png') },
                                "unknown":  { name:'Desconocido', color:'black'   },
                                "shadow":   { name:'Sombra',      color:'black'   },
                              },
                }
  }

  componentDidMount(){
    this.setState({fondo: this.state.elementos[this.state.tipo[0].type.name].color })
  }
 
  render() {
    return (
      
      <Tab.Navigator initialRouteName="Pokemon" 
                     screenOptions={({ route }) => ({
                                    tabBarIcon: ({ focused, color, size }) => {
                                      let iconName;

                                      if (route.name === 'Pokemon') {
                                        return <Image source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/"+this.state.datos.id+".png"}} style={{width:40, height:40}} />;
                                      } else if (route.name === 'PokeGaleria') {
                                        iconName = focused ? 'images' : 'images-outline';
                                      }

                                      // You can return any component that you like here!
                                      return <Ionicons name={iconName} size={size} color={color} />;
                                    },
                                    tabBarStyle:{ backgroundColor: "#ffee58", borderTopWidth:1, borderTopColor:'black'},
                                    tabBarActiveTintColor: 'black',
                                    tabBarInactiveTintColor: 'gray',
                                    headerShown:false,
                                    tabBarLabelStyle:{ fontWeight:'bold' }
                                    
                                    
                                  })} >
        
        {/* DETALLEDE DEL POKEMON */}
        <Tab.Screen name="Pokemon" component={PokeDetails} 
                    initialParams={{ datos: this.state.datos,
                                     stats: this.state.stats,
                                     tipo: this.state.tipo,
                                     fondo: this.state.fondo,
                                     elementos: this.state.elementos, }} />
        
        {/* IMAGENES DEL POKEMON */}
        <Tab.Screen name="PokeGaleria" component={PokeGaleria} options={{ title:"Galeria" }}
                    initialParams={{ datos: this.state.datos,
                                     imagenes: this.state.datos.sprites,
                                     tipo: this.state.tipo,
                                     elementos: this.state.elementos }}/>
        
        {/* <Tab.Screen name="Caracteristicas" component={PokeDetails2} initialParams={{ data: this.state.datos.moves}} />

        
                            */}
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
