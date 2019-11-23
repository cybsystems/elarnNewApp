import React from 'react';
import {Text, View, Image} from 'react-native';

const TourSlide = ({item, styles}) => (
  <View style={{...styles[item.item.style]}}>
    <View style={{marginTop: '20%'}}>
      <Text style={styles.title}>{item.item.title}</Text>
      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <Image style={{width: '74%', height: item.item.height}} source={item.item.img} />
      </View>
      <Text style={styles.text}>{item.item.text}</Text>
    </View>
  </View>
);

export default TourSlide;
