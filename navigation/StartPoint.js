import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import TourPage from '../pages/TourPage';
import {connect} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginPage from '../pages/LoginPage';

const StartPointImpl = ({statusBarColor, showNextPage}) => (
  <>
    <StatusBar backgroundColor={statusBarColor} />
    <View style={styles.scrollView}>
      {!showNextPage ? <TourPage /> : <LoginPage />}
    </View>
  </>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const StartPoint = connect(state => {
  const {statusBarColor, showNextPage} = state.rawData;
  return {statusBarColor, showNextPage};
})(StartPointImpl);

export default StartPoint;
