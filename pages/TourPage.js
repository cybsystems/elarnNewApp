import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {slides, tourStyles} from './utils';
import TourSlide from '../components/TourSlide';
import {updateRawData} from '../redux/actions';

export default class TourPage extends Component {
  renderItem = item => {
    return <TourSlide item={item} styles={tourStyles} />;
  };
  onSlideChange = (index, lastIndex) => {
    updateRawData({
      statusBarColor: tourStyles[slides[index].style].backgroundColor,
    });
  };
  onDone = () => updateRawData({showNextPage: true});
  render() {
    return (
      <View style={tourStyles.mainContent}>
        <AppIntroSlider
          showPrevButton
          renderItem={this.renderItem}
          slides={slides}
          onSlideChange={this.onSlideChange}
          onDone={this.onDone}
        />
      </View>
    );
  }
}
