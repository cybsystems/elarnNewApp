import React, { Component } from "react";

import { View, BackHandler, KeyboardAvoidingView } from "react-native";
import { updateRawData } from "../redux/actions";
import { Content, Button, Text, Footer } from "native-base";
import CustomForm from "../components/CustomForm";
import { loginStyles } from "./styles/loginStyles";
import { baseUrl } from "../utils";
import { showMessage } from "react-native-flash-message";
import { storeData } from "../storage";

const backgrundColor = "#007366";

const formItems = {
  fullName: { label: "Full  Name" },
  email: { label: "Email", keyboardType: "email-address" },
  classId: { label: "Class Id" },
};

export default class SignUpPage extends Component {
  state = { showSubmit: false };
  constructor() {
    super();
    this.store = {};
  }

  componentDidMount() {
    updateRawData({ statusBarColor: backgrundColor });
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackPress
    );
  }
  goBack = () => {
    updateRawData({ statusBarColor: "#7e30b0" });
    this.props.navigation.pop();
  };
  handleBackPress = () => {
    this.goBack();
    return true;
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }

  isFine = () => {
    const keys = Object.keys(this.store);
    for (let i = 0; i < keys.length; i++) {
      if (!this.store[keys[i]] || this.store[keys[i]].trim().length == 0)
        return false;
    }
    return true;
  };
  onFormChange = (txt, item) => {
    this.store[item] = txt;

    this.setState({
      showSubmit:
        this.isFine() &&
        Object.keys(this.store).length === Object.keys(formItems).length,
    });
  };

  onSignUp = async () => {
    try {
      const { fullName, email, classId } = this.store;
      let formData = new FormData();
      formData.append("full_name", fullName);
      formData.append("email", email);
      formData.append("classId", classId);
      const res = await fetch(`${baseUrl}/addStudentInvitation.php`, {
        body: formData,
        method: "post",
      })
        .then(res => res.json())
        .then(res => res);

      if (res && res.res === "Y") {
        showMessage({
          message: "Invitation Sent",
          type: "success",
        });
        await storeData({ "@INVITATION_SENT": "true" });
        this.props.navigation.navigate("HomeScreen");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: backgrundColor }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 22,
            color: "white",
            marginTop: 50,
          }}
        >
          SIGN UP
        </Text>

        <Content style={{ flex: 1, marginLeft: 40, marginTop: 50 }}>
          <CustomForm
            onFormChange={this.onFormChange}
            formItems={formItems}
            style={loginStyles}
          />
        </Content>
        <Footer style={{ display: "flex", backgroundColor: "transperant" }}>
          {this.state.showSubmit
            ? <Button onPress={this.onSignUp} full success style={{ flex: 1 }}>
                <Text>Submit</Text>
              </Button>
            : <Text />}
        </Footer>
      </KeyboardAvoidingView>
    );
  }
}
