import React, { Component } from "react";
import { BackHandler } from "react-native";
import { updateRawData } from "../redux/actions";
import { loginStyles } from "./styles/loginStyles";
import { removeData } from "../storage";
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
} from "native-base";

export default class LoginPage extends Component {
  state = { username: "", password: "" };

  componentDidMount() {
    updateRawData({ statusBarColor: "#7e30b0" });
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackPress
    );
  }
  handleBackPress = () => {
    BackHandler.exitApp();
    return true;
  };

  onLogin = async () => {
    await removeData("@INTRO_SHOWN");
  };

  onSignUpClicked = () => {
    this.props.navigation.navigate("SignUp");
  };
  render() {
    const styles = loginStyles;
    return (
      <Container style={{ backgroundColor: "#7e30b0" }}>
        <Content>
          <Form
            style={{
              marginTop: "50%",
              alignSelf: "center",
            }}
          >
            <Item style={styles.input} floatingLabel>
              <Label style={styles.label}>Username</Label>
              <Input style={styles.input} />
            </Item>
            <Item style={styles.input} floatingLabel>
              <Label style={styles.label}>Password</Label>
              <Input style={styles.input} />
            </Item>

            <Button
              success
              full
              style={{ marginTop: 10 }}
              onPress={this.onLogin}
            >
              <Text> Login </Text>
            </Button>
            <Button
              primary
              full
              style={{ marginTop: 10 }}
              onPress={this.onSignUpClicked}
            >
              <Text> SignUp </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
