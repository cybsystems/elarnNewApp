import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { DEVICE_WIDTH, setCarousel } from "../utils";

export default class RecentVideosAndNotes extends Component {
  state = { selectedIndex: 0 };
  scrollRef = React.createRef();
  componentDidMount() {
    setCarousel(this);
  }
  onScroll = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({ selectedIndex });
  };

  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View>
        <View>
          <ScrollView
            ref={this.scrollRef}
            onMomentumScrollEnd={this.onScroll}
            style={styles.scrollView}
            horizontal
            pagingEnabled
          >
            {images.map(image =>
              <Image source={{ uri: image }} style={styles.carousel} />
            )}
          </ScrollView>
          <View style={styles.circleDiv}>
            {images.map((image, index) =>
              <View
                key={image}
                style={[
                  styles.whiteCircle,
                  { opacity: index === selectedIndex ? 0.5 : 1 }
                ]}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    height: Dimensions.get("window").height / 3,
    marginTop: 20
  },
  carousel: {
    height: Dimensions.get("window").height / 3,
    width: DEVICE_WIDTH
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    width: DEVICE_WIDTH,
    height: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "white"
  }
});
