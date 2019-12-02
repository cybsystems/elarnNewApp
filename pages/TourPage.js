import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {slides, tourStyles} from './utils';
import TourSlide from '../components/TourSlide';

import {updateRawData} from '../redux/actions';
import {storeData, getData} from '../storage';

export default class TourPage extends Component {
  state = {hide: true};
  componentDidMount = async () => {
    try {
      const value = await getData('@INTRO_SHOWN');

      if (value) {
        this.props.navigation.navigate('Login');
        return;
      }
    } catch (e) {
      // error reading value
    }
    this.setState({hide: false});
    updateRawData({statusBarColor: '#f64c73'});
  };

  renderItem = item => {
    return <TourSlide item={item} styles={tourStyles} />;
  };
  onSlideChange = (index, lastIndex) => {
    updateRawData({
      statusBarColor: tourStyles[slides[index].style].backgroundColor,
    });
  };
  onDone = async () => {
    await storeData({'@INTRO_SHOWN': 'true'});
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <>
        {!this.state.hide && (
          <View style={tourStyles.mainContent}>
            <AppIntroSlider
              showPrevButton
              renderItem={this.renderItem}
              slides={slides}
              onSlideChange={this.onSlideChange}
              onDone={this.onDone}
            />
          </View>
        )}
      </>
    );
  }
}
