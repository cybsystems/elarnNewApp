import React from 'react';
import {View, Text, StyleSheet, Easing, Animated} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import {slideScreen} from '../animations/slideScreen';
const Routes = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
    },
    SignUp: {
      screen: SignUpPage,
    },
  },
  {
    initialRouteName: 'Login',
    transitionConfig: slideScreen,
    headerMode: 'none',
  },
);

const Container = createAppContainer(Routes);

const LoginSignUpNavigator = props => (
  <View style={{minHeight: '100%'}}>
    <Container />
  </View>
);

export default LoginSignUpNavigator;
