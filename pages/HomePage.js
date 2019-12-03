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
import { BackHandler } from "react-native";
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
      <Container style={{ height: "100%", backgroundColor: "#2663a6" }}>
        <Content>
          <Card
            style={{
              padding: 10,

              alignSelf: "center",
              marginTop: 220,
            }}
          >
            <CardItem header style={{ alignSelf: "center" }} />
            <CardItem
              style={{ alignSelf: "center" }}
              button
              onPress={() => removeData("@INVITATION_SENT")}
            >
              <Body>
                <Text style={{ fontSize: 30 }}>Invitation Pending</Text>
              </Body>
            </CardItem>
            <CardItem footer style={{ alignSelf: "center" }} />
          </Card>
        </Content>
      </Container>
    );
  }
}
