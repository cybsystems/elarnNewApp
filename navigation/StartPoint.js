import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import TourPage from '../pages/TourPage';
import {connect} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginPage from '../pages/LoginPage';
import LoginSignUpNavigator from './LoginSignUpNavigator';

const StartPointImpl = ({statusBarColor, showNextPage}) => (
  <>
    <StatusBar backgroundColor={statusBarColor} />

    <View>{!showNextPage ? <TourPage /> : <LoginSignUpNavigator />}</View>
  </>
);

const StartPoint = connect(state => {
  const {statusBarColor, showNextPage} = state.rawData;

  return {statusBarColor, showNextPage};
})(StartPointImpl);

export default StartPoint;
