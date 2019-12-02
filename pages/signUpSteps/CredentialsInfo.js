import React, { Component } from "react";
import { View } from "react-native";
import CustomForm from "../../components/CustomForm";
import { loginStyles } from "../styles/loginStyles";

export default class CredentialsInfo extends Component {
  render() {
    const formItems = {
      userName: { label: "Username" },
      cpassword: { label: "Confirm Password" },
      password: { label: "Password" },
    };

    return (
      <View>
        <CustomForm formItems={formItems} style={loginStyles} />
      </View>
    );
  }
}
