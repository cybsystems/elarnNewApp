import React, { Component } from "react";
import {
  Content,
  Body,
  Card,
  CardItem,
  Container,
  Button,
  Text,
} from "native-base";
import { BackHandler, NativeModules } from "react-native";
import { updateRawData } from "../redux/actions";
import { removeData } from "../storage";

export default class HomePage extends Component {
  componentDidMount() {
    updateRawData({ statusBarColor: "#2663a6" });
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackPress
    );
  }

  handleBackPress = () => {
    BackHandler.exitApp();
    return true;
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }
  render() {
    return (
      <Container style={{ height: "100%" }}>
        <Content>
          <Text>Home Page</Text>

          <Button
            style={{ alignContent: "center" }}
            onPress={() =>{ 
              NativeModules.MyModule.navigateToNative("http://techslides.com/demos/sample-videos/small.mp4");
             }}
          >
            <Text style={{ alignSelf: "center" }}>Start Video</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
