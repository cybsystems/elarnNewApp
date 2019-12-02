import React, { Component } from "react";
import { Button, Text } from "native-base";
export default class PlainButton extends Component {
  render() {
    const { onPress, text, style = {} } = this.props;
    return (
      <Button
        onPress={onPress}
        style={{
          backgroundColor: "#00838F",

          alignSelf: "center",
          ...style,
        }}
        full
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          {text}
        </Text>
      </Button>
    );
  }
}
