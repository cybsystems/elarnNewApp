import React from "react";
import { View, Text, StyleSheet, Easing, Animated } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import { slideScreen } from "../animations/slideScreen";
import TourPage from "../pages/TourPage";
import HomePage from "../pages/HomePage";
const Routes = createStackNavigator(
  {
    Tour: { screen: TourPage },
    Login: {
      screen: LoginPage,
    },
    SignUp: {
      screen: SignUpPage,
    },
    HomeScreen: {
      screen: HomePage,
    },
  },
  {
    initialRouteName: "Tour",
    transitionConfig: slideScreen,
    headerMode: "none",
  }
);

const Container = createAppContainer(Routes);

const LoginSignUpNavigator = props =>
  <View style={{ minHeight: "100%" }}>
    <Container />
  </View>;

export default LoginSignUpNavigator;
