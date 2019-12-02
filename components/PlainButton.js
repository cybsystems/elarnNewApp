import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default class PlainButton extends Component {
  render() {
    const {onPress, text, style = {}} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#00838F',
          padding: 12,
          marginTop: 20,
          ...style,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
