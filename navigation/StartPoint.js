import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import LoginSignUpNavigator from './LoginSignUpNavigator';

const StartPointImpl = ({statusBarColor, showNextPage}) => (
  <>
    <StatusBar backgroundColor={statusBarColor} />
    <LoginSignUpNavigator />
  </>
);

const StartPoint = connect(state => {
  const {statusBarColor, showNextPage} = state.rawData;

  return {statusBarColor, showNextPage};
})(StartPointImpl);

export default StartPoint;
