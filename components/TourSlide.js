import React from 'react';
import {Text, View} from 'react-native';

const TourSlide = ({item, styles}) => (
  <View style={styles[item.item.style]}>
    <Text style={styles.title}>{item.item.title}</Text>

    <Text style={styles.text}>{item.item.text}</Text>
  </View>
);

export default TourSlide;
