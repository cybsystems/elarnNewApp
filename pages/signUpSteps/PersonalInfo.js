import React, { Component } from "react";
import { View } from "react-native";
import CustomForm from "../../components/CustomForm";
import { loginStyles } from "../styles/loginStyles";

export default class PersonalInfo extends Component {
  render() {
    const formItems = {
      fullName: { label: "Full  Name" },
      address: { label: "Address" },
      city: { label: "City" },
      mobileNumber: { label: "Mobile No", keyboardType: "phone-pad" },
      email: { label: "Email", keyboardType: "email-address" },
    };

    return (
      <View style={{ marginBottom: 50 }}>
        <CustomForm formItems={formItems} style={loginStyles} />
      </View>
    );
  }
}
