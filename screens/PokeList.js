import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,Text,View,ScrollView, TouchableOpacity,Image,Modal,ActivityIndicator } from "react-native";
import {FAB,Overlay } from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';

var count = 151;

export default class PokeList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={ datos:[],
                 url: "https://pokeapi.co/api/v2/pokemon/?limit=386",
                 estado: 0,
                 loadVisible: true,
               };
    this.ref = React.createRef();
    this.setVisibility = this.setVisibility.bind(this);
  }

  componentDidMount() {
    this.fetchPokeList();
    
  }

  fetchPokeList () {

    fetch(this.state.url)
    .then((response) => ( this.setState({estado:response.status}), response.json()))
    .then((data) => this.setState({datos: data.results},
                    this.state.estado === 200 ? this.setVisibility(false) : this.setVisibility(true) ))

  }

  fetchPokemon (url)  {
    
    this.setVisibility(true);
    fetch (url)
      .then((response) => (this.setState({estado:response.status}), response.json()))
      .then((data) => (this.state.estado === 200 ? this.setVisibility(false) : this.setVisibility(true),
                       this.props.navigation.navigate("PokeApi",{datos: data }) ));
     
  }

  setVisibility(value) {
    this.setState({ loadVisible: value });
  }

  render() {
    return (count=0,
      
      <View style={styles.container} >
        <ScrollView ref={this.ref}>
        <StatusBar hidden/>
           
        {/*   ESTADO DEL FETCH
          <View style={styles.conexioncontainer}>
            <Text style={styles.conexion}>{(this.state.estadoLista===200)? 'Conexion exitosa:PokeList':(this.state.estadoLista>400)? 'ERROR':'Conectando con la API!'}</Text>
            <Text style={styles.conexion}>{(this.state.estadoLista===200)? 'Imprimiento informacion':(this.state.estadoLista>400)? 'ERROR':'Esperando respuesta'}</Text>
          </View>  
        */}

        {/* Modal - Animacion de carga */}
              
          <Overlay  statusBarTranslucent={true} animationType={'fade'} isVisible={this.state.loadVisible} fullScreen={true} overlayStyle={{ justifyContent:'center' }} >
          
            <ActivityIndicator animating={true} size={150} style={{ }}
                                 color={"#ffee58"}  />
          </Overlay >
       


        <View style={{ alignItems:'center' }}>
          
          <Text style={{ fontWeight: "bold", paddingVertical:15 }} > 
            Eleji un Pokemon haciendo click en la imagen
          </Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch' }} >
        {this.state.datos.map( (element) => ( count++ ,
           
         <TouchableOpacity key={count} onPress={ () => { this.fetchPokemon(element.url )} } > 
            <Image source={{uri:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(count)+".png"}} 
                   style={{height:130, width: 130, alignSelf:'center'}}  />
         </TouchableOpacity > 
           
          ))
          
        } 
        
        
        <FAB placement={'right'} color='#f44336' 
             icon={<Ionicons name="arrow-up-circle" size={25} color='#000000' />}
             onPress={() => {this.ref.current.scrollTo({x:0,y:0, animated:true})}}
             buttonStyle={{ borderRadius:50 }}
             style={{position:'absolute', alignItems: 'center',
             justifyContent: 'center',}}       /> 

          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dae0e9",
    
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
