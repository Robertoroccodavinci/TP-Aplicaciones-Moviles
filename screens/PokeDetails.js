import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text,View, ScrollView, Image,ImageBackground } from "react-native";
import { Card } from "react-native-elements";
import fondoPokemon from '../images/fondoPokemon3.png';

let img = "";

export default class PokeDetails extends React.Component {
  
  constructor(props) {
    super(props);
    //this.state ={img:""};
        
  }

  render() {
    return (
      <View style={{ backgroundColor: this.props.route.params.elementos[this.props.route.params.tipo[0].type.name].color }} >

        <ScrollView>
                 {/* IMAGEN DE FONDO */}
        <ImageBackground source={fondoPokemon} style={{width:'auto', height:'auto'  }} 
                         imageStyle={{ tintColor: ((this.props.route.params.tipo[1]!=null)?  this.props.route.params.elementos[this.props.route.params.tipo[1].type.name].color : 'white')  }}  >
 
        <StatusBar hidden/>
       
        <View style={{  alignContent:"center"}} >
                      {/* IMAGEN DEL POKEMON */}
            <Image source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+this.props.route.params.datos.id+".png"}} 
                   style={{height:300, width: 300, marginBottom:-30, alignSelf:'center'   }}/>
         
                    {/* DETALLES Y TIPOS */}
          
            <Card containerStyle={{ borderRadius:40, elevation:10, alignItems:'center', marginBottom:10}}   >
              <View style={{flexDirection:'row'  }}>    
                <View style={{flexDirection:'column',alignContent:'flex-start', justifyContent:'center' }}> 
                  <Text style={{ fontSize: 19 }}>Pokedex ID: {this.props.route.params.datos.id} </Text>
                  <Text style={{ fontSize: 19,textTransform:'capitalize' }}>Nombre: {this.props.route.params.datos.name }  </Text>
                  <Text style={{ fontSize: 19 }}>Altura: {this.props.route.params.datos.height*10}cm  </Text>
                  <Text style={{ fontSize: 19 }}>Peso: {this.props.route.params.datos.weight/10}kg </Text> 
                </View>  
                <View style={{flexDirection:'column',alignContent:'flex-end', justifyContent:'space-between', marginTop:10 }}> 
                    {this.props.route.params.tipo.map( (element) => ( 
                    <View key={element.type.name} style={{ alignItems:'center' }}  >
                      <Image source={this.props.route.params.elementos[element.type.name].img}
                            style={{ height: 70, width: 70, padding:5,
                                      tintColor: this.props.route.params.elementos[element.type.name].color}} /> 
                            
                      <Text style={{ fontSize: 20}}>{this.props.route.params.elementos[element.type.name].name}</Text>
                    </View>
                    ))}
                </View>  
              </View> 
            </Card>
           
              
                    {/* STATUS */}
          <Card containerStyle={{  borderRadius:40, elevation:10, marginBottom:15 }}   >
            
            <Text style={{ fontSize: 20, fontWeight:'bold', marginBottom:5, alignSelf:'center'}}> Estadísticas </Text>
            <Text style={{ paddingHorizontal: 170, height: 2, backgroundColor: "#000000", marginBottom:5 }} />
            
            <View style={{flexDirection:'row', marginVertical:10}}>

              <View style={{flexDirection:'column',alignContent:'flex-start', justifyContent:'space-between'}}>
                <Text style={{ fontSize: 15}}> Vida: {this.props.route.params.stats[0].base_stat}              </Text> 
                <Text style={{ fontSize: 15}}> Ataque: {this.props.route.params.stats[1].base_stat}            </Text>
                <Text style={{ fontSize: 15}}> Defensa: {this.props.route.params.stats[2].base_stat}           </Text>
                <Text style={{ fontSize: 15}}> Ataque Especial: {this.props.route.params.stats[3].base_stat}   </Text>
                <Text style={{ fontSize: 15}}> Defensa Especial: {this.props.route.params.stats[4].base_stat}  </Text>
                <Text style={{ fontSize: 15}}> Velocidad: {this.props.route.params.stats[5].base_stat}         </Text> 
              </View>

              <View style={{flexDirection:'column',alignContent:'flex-end', justifyContent:'space-between' }}>
                <Text style={{ width:this.props.route.params.stats[0].base_stat, backgroundColor: this.props.route.params.elementos[this.props.route.params.tipo[0].type.name].color }} />
                <Text style={{ width:this.props.route.params.stats[1].base_stat, backgroundColor: this.props.route.params.elementos[this.props.route.params.tipo[0].type.name].color }} />
                <Text style={{ width:this.props.route.params.stats[2].base_stat, backgroundColor: this.props.route.params.elementos[this.props.route.params.tipo[0].type.name].color }} />
                <Text style={{ width:this.props.route.params.stats[3].base_stat, backgroundColor: this.props.route.params.elementos[this.props.route.params.tipo[0].type.name].color }} />
                <Text style={{ width:this.props.route.params.stats[4].base_stat, backgroundColor: this.props.route.params.elementos[this.props.route.params.tipo[0].type.name].color }} />
                <Text style={{ width:this.props.route.params.stats[5].base_stat, backgroundColor: this.props.route.params.elementos[this.props.route.params.tipo[0].type.name].color }} />
              </View>  

            </View>
          
          </Card>
      
        </View>
        </ImageBackground>
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
});
