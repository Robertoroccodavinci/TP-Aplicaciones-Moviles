import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, LogBox} from "react-native";
import { Card, Paragraph, Title, FAB } from "react-native-paper";

export default class APIPicsum extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
        <Image style={{width:'auto', height:150, borderRadius: 10 }}
               source={require('../images/loren-picsum-logo.png')} 
                />

          <Paragraph style={styles.descripcion}>Una API fácil de usar.</Paragraph>
          <Paragraph style={styles.descripcion}>
            Consulte la API en busqueda de una lista de imagenes:"https://picsum.photos/v2/list" </Paragraph>
          <Paragraph style={styles.descripcion}>
            Agregandole "page" y "limit" podia ir pasando de pagina al tocar los botones de siguiente página y anterior página </Paragraph>
          <Paragraph style={styles.descripcion}>
            Las imagenes fueron obtenidas a traves de la url "https://picsum.photos/id/", colocandole el id obtenido por el
            listado de imagenes, y si le agregamos "/400/400/" al final de la url, podemos pedirlas en un tamaño en particular
          </Paragraph>
         
        </Card>
        <FAB style={styles.fab} medium icon="image-multiple" label="Ir a Lista" color="#000000"
               onPress={() => this.props.navigation.navigate("PicsumList")} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6EAF0",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  card: {
    borderRadius: 15,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#b3e5fc",
    marginTop: 5,
    elevation: 3,
  },

  descripcion: {
    padding: 5,
    marginHorizontal: 5,
    fontSize: 15,
  },
  titulo: {
    padding: 5,
    marginHorizontal: 5,
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#f9a825",
  },
});
