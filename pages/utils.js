import {StyleSheet} from 'react-native';
export const slides = [
  {
    key: 'somethun',
    title: 'See Notes and Videos',
    text: 'See videos and pdfs that your teacher provides you at one place',
    style: 'screenOne',
    img: require('../assets/imgs/sheets.png'),
    height: '81%',
  },
  {
    key: 'somethun-dos',
    title: 'Get Real time updates',
    text: 'You will get real time updates from your teacher',
    style: 'screenTwo',
    img: require('../assets/imgs/alarm.png'),
    height: '82%',
  },

  {
    key: 'somethun1',
    title: 'Solve Assginments',
    text: 'Solve assignments and see instant result ',
    style: 'screenThree',
    img: require('../assets/imgs/assignment.png'),
    height: '81%',
  },
];
export const tourStyles = StyleSheet.create({
  mainContent: {},
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontSize: 15,
  },
  title: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  screenOne: {
    display: 'flex',
    color: 'white',
    backgroundColor: '#f64c73',
    flex: 1,
  },
  screenTwo: {
    display: 'flex',
    backgroundColor: '#7e30b0',
    flex: 1,
    color: 'white',
  },
  screenThree: {
    display: 'flex',
    backgroundColor: '#2663a6',
    flex: 1,
    color: 'white',
  },
});
