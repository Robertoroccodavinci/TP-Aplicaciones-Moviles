import * as React from "react";
import { useScrollToTop } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView, StatusBar, Image } from "react-native";
import { Card, Button, Divider, FAB, Modal, Portal, Paragraph, Provider, ActivityIndicator } from "react-native-paper";
import axios from "axios";

export default class PicsumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  datos: [],
                    estado: 0,
                    cantP: 1,
                    url: "https://picsum.photos/v2/list?page=",
                    loadVisible: true,
                  };
    this.setVisibility = this.setVisibility.bind(this);
  }

  componentDidMount() {
    this.fetchList(this.state.cantP);
  }

  fetchList(value) {
    this.setState({ estado: 0 });
    this.setVisibility(true);
    axios
      .get(this.state.url + value.toString() + "&limit=5")
      .then((response) => {
        this.setState({ estado: response.status });
        this.setState({ datos: response.data });
        this.state.estado === 200
          ? this.setVisibility(false)
          : this.setVisibility(true);
        this.setState({ cantP: value });
      })
      .catch(function (error) {
        console.log(error);
        throw error;
      });
  }

  setVisibility(value) {
    this.setState({ loadVisible: value });
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider>
          <ScrollView>
            <StatusBar hidden />
          
            {/* Modal - Animacion de carga */}
            <Portal>
              <Modal visible={this.state.loadVisible}>
                <ActivityIndicator
                  animating={true}
                  backgroundColor={"#E6EAF0"}
                  height={650}
                  size={60}
                  color={"#f9a825"}
                />
              </Modal>
            </Portal>

            <Card
              style={{
                borderRadius: 30,
                elevation: 3,
                flexDirection: "row",
                backgroundColor: "#b3e5fc",
              }}
            >
              <FAB
                disabled={this.state.cantP <= 1 ? true : false}
                style={{
                  marginRight: "auto",
                  backgroundColor: "#f9a825",
                  position: "absolute",
                }}
                mode="contained"
                icon="arrow-left-bold"
                color="black"
                onPress={() => this.fetchList(this.state.cantP - 1)}
              ></FAB>

              <Paragraph
                style={{
                  alignSelf: "center",
                  marginHorizontal: "auto",
                  color: "black",
                  fontSize: 18,
                  padding: 14,
                }}
              >
                Página: {this.state.cantP}
              </Paragraph>

              <FAB
                style={{
                  marginLeft: "auto",
                  backgroundColor: "#f9a825",
                  position: "absolute",
                  right: 0,
                }}
                mode="contained"
                icon="arrow-right-bold"
                color="black"
                onPress={() => this.fetchList(this.state.cantP + 1)}
              ></FAB>
            </Card>

            {this.state.datos.map((element) => (
              <View key={element.id}>
                <Card style={styles.card}>
                  <Image
                    source={{
                      uri:
                        "https://picsum.photos/id/" + element.id + "/400/400",
                    }}
                    style={{ height: 300, borderRadius: 10 }}
                  />
                  <Card.Content>
                    <Button
                      color="black"
                      style={styles.boton}
                      onPress={() =>
                        this.props.navigation.navigate("PicsumDetails", {
                          data: element,
                        })
                      }
                    >
                      {" "}
                      Detalles
                    </Button>
                  </Card.Content>
                </Card>
                <Divider />
              </View>
            ))}

            <Card
              style={{
                borderRadius: 30,
                elevation: 3,
                flexDirection: "row",
                backgroundColor: "#b3e5fc",
                marginTop:10,
                marginBottom:5
              }}
            >
             <FAB
                disabled={this.state.cantP <= 1 ? true : false}
                style={{
                  marginRight: "auto",
                  backgroundColor: "#f9a825",
                  position: "absolute",
                }}
                mode="contained"
                icon="arrow-left-bold"
                color="black"
                onPress={() => this.fetchList(this.state.cantP - 1)}
              ></FAB>

              <Paragraph
                style={{
                  alignSelf: "center",
                  marginHorizontal: "auto",
                  color: "black",
                  fontSize: 18,
                  padding: 14,
                }}
              >
                Página: {this.state.cantP}
              </Paragraph>

              <FAB
                style={{
                  marginLeft: "auto",
                  backgroundColor: "#f9a825",
                  position: "absolute",
                  right: 0,
                }}
                mode="contained"
                icon="arrow-right-bold"
                color="black"
                onPress={() => this.fetchList(this.state.cantP + 1)}
              ></FAB>
            </Card>
          </ScrollView>
        </Provider>
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
  card: {
    borderRadius: 10,
    backgroundColor: "#b3e5fc",
    marginTop: 10,
    elevation: 2,
  },

  descripcion: {
    paddingLeft: 10,
    fontSize: 13,
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
  boton: {
    marginTop: 2,
    backgroundColor: "#f9a825",
    borderColor: "#040505",
    borderRadius: 10,
    elevation: 3,
    justifyContent: "center",
  },
  botoncontainer: {
    elevation: 2,
  },
  titulo: {
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: "center",
    fontSize: 40,
  },
  fab: {
    position: "absolute",
    margin: 16,
    bottom: 10,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
