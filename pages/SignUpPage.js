import React, { Component } from "react";

import { View, BackHandler, KeyboardAvoidingView } from "react-native";
import { updateRawData } from "../redux/actions";
import { loginStyles } from "./styles/loginStyles";
import Wizard from "react-native-wizard";
import PlainButton from "../components/PlainButton";
import PersonalInfo from "./signUpSteps/PersonalInfo";
import CredentialsInfo from "./signUpSteps/CredentialsInfo";
import ClassInfo from "./signUpSteps/ClassInfo";
import { Content, Footer } from "native-base";
export default class SignUpPage extends Component {
  state = { currentStep: 0 };
  constructor() {
    super();
    this.wizard = React.createRef();
  }

  componentDidMount() {
    updateRawData({ statusBarColor: "#01579B" });
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

  onSignUp = async () => {};

  render() {
    const styles = loginStyles;
    const stepList = [
      {
        content: <PersonalInfo />,
      },
      {
        content: <CredentialsInfo />,
      },
      {
        content: <PersonalInfo />,
      },
    ];
    const { currentStep } = this.state;

    return (
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#01579B" }}
        behavior="padding"
        enabled
      >
        <Content style={{ flex: 1, marginLeft: 40 }}>
          <Wizard
            nextStepAnimation="slideRight"
            prevStepAnimation="slideLeft"
            activeStep={currentStep}
            ref={this.wizard}
            steps={stepList}
          />
        </Content>

        <Footer
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "transperant",
            marginBottom: 10,
          }}
        >
          <PlainButton onPress={() => this.wizard.current.prev()} text="Prev" />
          <PlainButton
            onPress={() => this.wizard.current.next()}
            text="Next"
            style={{ marginLeft: 10 }}
          />
        </Footer>
      </KeyboardAvoidingView>
    );
  }
}
