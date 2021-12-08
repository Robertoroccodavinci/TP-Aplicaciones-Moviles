import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text,View, ScrollView, Image,ImageBackground } from "react-native";
import { Card } from "react-native-elements";
import fondoPokemon from '../images/fondoPokemon2.png';

export default class PokeGaleria extends React.Component {
  
  constructor(props) {
    super(props);
            
  }

  render() {
    return (
      <View style={{ 
                     backgroundColor: this.props.route.params.elementos[this.props.route.params.tipo[0].type.name].color }} >

        <ScrollView>
                 {/* IMAGEN DE FONDO */}
        <ImageBackground source={fondoPokemon} style={{width:'auto', height:'auto'  }} 
                         imageStyle={{ tintColor: ((this.props.route.params.tipo[1]!=null)?  this.props.route.params.elementos[this.props.route.params.tipo[1].type.name].color : 'white')  }}  >
 
        <StatusBar hidden/>
       
        <View style={{  }} >
          
          <Card containerStyle={{  borderRadius:10, elevation:10, marginBottom:15, justifyContent:'center' }}   >
            <Text style={{ fontSize:30,fontWeight:'bold', alignSelf:'center' }} >Galeria</Text> 
          </Card>
          
          {/*##########  IMAGENES  ##########*/}

          {(this.props.route.params.imagenes.versions["generation-i"]["red-blue"].front_default === null)? null :
            
            <Card containerStyle={{  borderRadius:40, elevation:10, marginBottom:15 }} >
              <Text style={{ fontSize:15,fontWeight:'bold', alignSelf:'center' }} >Pokemon Red/Blue/Yellow</Text> 
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-i"]["red-blue"].front_default}} style={ styles.images } />
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-i"]["red-blue"].back_default}}  style={ styles.images } />
              </View>
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-i"]["yellow"].front_default}} style={ styles.images } />
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-i"]["yellow"].back_default}}  style={ styles.images } />
              </View>
            </Card>
           
          }
          {(this.props.route.params.imagenes.versions["generation-ii"]["gold"].front_default === null)? null :
          
            <Card containerStyle={{  borderRadius:40, elevation:10, marginBottom:15 }} >
              <Text style={{ fontSize:15,fontWeight:'bold', alignSelf:'center' }} >Pokemon Gold/Silver</Text> 
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-ii"]["gold"].front_default}} style={ styles.images } />
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-ii"]["gold"].back_default}}  style={ styles.images } />
              </View>
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-ii"]["silver"].front_default}} style={ styles.images } />
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-ii"]["silver"].back_default}}  style={ styles.images } />
              </View>
            </Card>

          } 
          
          {(this.props.route.params.imagenes.versions["generation-ii"]["crystal"].front_default === null)? null :

            <Card containerStyle={{  borderRadius:40, elevation:10, marginBottom:15 }} >
              <Text style={{ fontSize:15,fontWeight:'bold', alignSelf:'center' }} >Pokemon Crystal</Text> 
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-ii"]["crystal"].front_default}} style={ styles.images } />
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-ii"]["crystal"].back_default}}  style={ styles.images } />
              </View>
            </Card>

          }  

          {(this.props.route.params.imagenes.versions["generation-iii"]["firered-leafgreen"].front_default === null)? null :

            <Card containerStyle={{  borderRadius:40, elevation:10, marginBottom:15 }} >
              <Text style={{ fontSize:15,fontWeight:'bold', alignSelf:'center' }} >Pokemon Fire Red/Leaf Green</Text> 
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-iii"]["firered-leafgreen"].front_default}} style={ styles.images } />
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-iii"]["firered-leafgreen"].back_default}}  style={ styles.images } />
              </View>
            </Card>
          
          }

          {(this.props.route.params.imagenes.versions["generation-iii"]["ruby-sapphire"].front_default === null)? null :

            <Card containerStyle={{  borderRadius:40, elevation:10, marginBottom:15 }} >
              <Text style={{ fontSize:15,fontWeight:'bold', alignSelf:'center' }} >Pokemon Ruby/Sapphire/Emerald</Text> 
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-iii"]["ruby-sapphire"].front_default}} style={ styles.images } />
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-iii"]["ruby-sapphire"].back_default}}  style={ styles.images } />
              </View>
            </Card>
          
          }

          {(this.props.route.params.imagenes.versions["generation-iv"]["heartgold-soulsilver"].front_default === null)? null :

            <Card containerStyle={{  borderRadius:40, elevation:10, marginBottom:15 }} >
              <Text style={{ fontSize:15,fontWeight:'bold', alignSelf:'center' }} >Pokemon Heart Gold/Soul Silver</Text> 
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-iv"]["heartgold-soulsilver"].front_default }} style={ styles.images } />
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-iv"]["heartgold-soulsilver"].back_default  }} style={ styles.images } />
              </View>
            </Card>
          
          }

          {(this.props.route.params.imagenes.versions["generation-iv"]["diamond-pearl"].front_default === null)? null :
          
            <Card containerStyle={{  borderRadius:40, elevation:10, marginBottom:15 }} >
              <Text style={{ fontSize:15,fontWeight:'bold', alignSelf:'center' }} >Pokemon Diamond/Pearl/Platinium</Text> 
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-iv"]["diamond-pearl"].front_default }} style={ styles.images } />
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-iv"]["diamond-pearl"].back_default  }} style={ styles.images } />
              </View>
            </Card>
          
          }

          {(this.props.route.params.imagenes.versions["generation-v"]["black-white"].front_default === null)? null :

            <Card containerStyle={{  borderRadius:40, elevation:10, marginBottom:15 }} >
              <Text style={{ fontSize:15,fontWeight:'bold', alignSelf:'center' }} >Pokemon Black/White</Text> 
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-v"]["black-white"].front_default }} style={ styles.images } />
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-v"]["black-white"].back_default  }} style={ styles.images } />
              </View>
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-v"]["black-white"].animated.front_default }} style={ styles.images } />
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-v"]["black-white"].animated.back_default  }} style={ styles.images } />
              </View>
            </Card>
          
          }

          {(this.props.route.params.imagenes.versions["generation-vi"]["omegaruby-alphasapphire"].front_default === null)? null :

            <Card containerStyle={{  borderRadius:40, elevation:10, marginBottom:15 }} >
              <Text style={{ fontSize:15,fontWeight:'bold', alignSelf:'center' }} >Pokemon Omega Ruby/Alpha Sapphire</Text> 
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-vi"]["omegaruby-alphasapphire"].front_default }} style={{ width:'100%',resizeMode:'contain' }}/>
              </View>
            </Card>
          
          }

          {(this.props.route.params.imagenes.versions["generation-vi"]["x-y"].front_default === null)? null :
          
            <Card containerStyle={{  borderRadius:40, elevation:10, marginBottom:15 }} >
              <Text style={{ fontSize:15,fontWeight:'bold', alignSelf:'center' }} >Pokemon X/Y</Text> 
              <View style={{flexDirection:'row', height:150}}>
                <Image source={{uri: this.props.route.params.imagenes.versions["generation-vi"]["x-y"].front_default }} style={{ width:'100%',resizeMode:'contain' }}/>
              </View>
            </Card>
          
          }


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
  images: {
    width:'50%',
    resizeMode:'contain',
        
  },

});
