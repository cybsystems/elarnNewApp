import {StyleSheet} from 'react-native';
export const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    style: 'screenOne',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    style: 'screenTwo',
  },

  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    style: 'screenThree',
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
  },
  title: {
    fontSize: 22,
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
    backgroundColor: '#20d2bb',
    flex: 1,
    color: 'white',
  },
  screenThree: {
    display: 'flex',
    backgroundColor: '#3395ff',
    flex: 1,
    color: 'white',
  },
});
