import React, { Component } from "react";

import { View, BackHandler, KeyboardAvoidingView } from "react-native";
import { updateRawData } from "../redux/actions";
import Wizard from "react-native-wizard";
import PlainButton from "../components/PlainButton";
import PersonalInfo from "./signUpSteps/PersonalInfo";
import CredentialsInfo from "./signUpSteps/CredentialsInfo";
import ClassInfo from "./signUpSteps/ClassInfo";
import { Content, Footer } from "native-base";

export default class SignUpPage extends Component {
  state = { hideButton: "Prev" };
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
    const stepList = [
      {
        content: <PersonalInfo />,
      },
      {
        content: <CredentialsInfo />,
      },
      {
        content: <ClassInfo />,
      },
    ];
    const { hideButton } = this.state;
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
            activeStep={0}
            ref={this.wizard}
            steps={stepList}
            currentStep={({ currentStep, isLastStep, isFirstStep }) => {
              if (isFirstStep) {
                this.setState({ hideButton: "Prev" });
                return;
              }
              if (isLastStep) {
                this.setState({ hideButton: "ShowSubmit" });
                return;
              }
              this.setState({ hideButton: " " });
            }}
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
          {hideButton !== "Prev" &&
            <PlainButton
              onPress={() => this.wizard.current.prev()}
              text="Prev"
            />}
          {hideButton !== "Next" &&
            hideButton !== "ShowSubmit" &&
            <PlainButton
              onPress={() => this.wizard.current.next()}
              text="Next"
              style={{ marginLeft: 10 }}
            />}
          {hideButton === "ShowSubmit" &&
            <PlainButton
              onPress={() => this.wizard.current.next()}
              text="Send Invitation"
              style={{ marginLeft: 10 }}
            />}
        </Footer>
      </KeyboardAvoidingView>
    );
  }
}
