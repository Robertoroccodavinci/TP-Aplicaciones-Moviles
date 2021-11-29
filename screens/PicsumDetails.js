import React from "react";
import { NavigationContainer, useScrollToTop } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import {
  Card,
  Button,
  Paragraph,
  Divider,
  Switch,
  Title,
  FAB,
} from "react-native-paper";
import axios from "axios";

export default class PicsumDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: this.props.route.params.data,
      estado: 0,
      url: "https://picsum.photos/id/",
      uri: "url",
      size: "/400/400/",
      opacity: false,
    };
  }

  componentDidMount() {
    this.setState({
      uri: this.state.url + this.state.datos.id + this.state.size,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar hidden />

          <View key={this.state.datos.id}>
            <Card style={styles.card}>
              <Image
                source={{ uri: this.state.uri }}
                style={{
                  height: 300,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#040505",
                }}
              />
              <Card.Content>
                <Text style={styles.descripcion}>
                  ID: {this.state.datos.id}
                </Text>
                <Text style={styles.descripcion}>
                  Author: {this.state.datos.author}
                </Text>
                <Text style={styles.descripcion}>
                  Size:{" "}
                  {this.state.datos.width +
                    "px/" +
                    this.state.datos.height +
                    "px"}
                </Text>
                <Text style={styles.descripcion}>
                  URL: {this.state.datos.url}
                </Text>
                <Text style={styles.descripcion}>
                  Download URL: {this.state.datos.download_url}
                </Text>
              </Card.Content>
            </Card>
            <Divider />
            <Button
              style={styles.boton}
              mode="contained"
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={{ color: "black" }}> Volver </Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    padding: 8,
  },
  card: {
    borderRadius: 10,
    backgroundColor: "#b3e5fc",
    marginTop: 10,
    elevation: 3,
  },

  descripcion: {
    paddingLeft: 10,
  },

  boton: {
    margin: 5,
    backgroundColor: "#f9a825",
    borderColor: "#040505",
    elevation: 3,
    justifyContent: "center",
  },
});
