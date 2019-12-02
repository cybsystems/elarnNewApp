import React, { Component } from "react";
import { View } from "react-native";
import CustomForm from "../../components/CustomForm";
import { loginStyles } from "../styles/loginStyles";

export default class ClassInfo extends Component {
  render() {
    const formItems = {
      classId: { label: "Class Id" },
    };

    return (
      <View>
        <CustomForm formItems={formItems} style={loginStyles} />
      </View>
    );
  }
}
