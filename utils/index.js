import { Dimensions } from "react-native";

export const baseUrl = "http://192.168.43.11";

export const DEVICE_WIDTH = Dimensions.get("window").width;

export const setCarousel = caller => {
  setInterval(() => {
    caller.setState(
      prevState => ({
        selectedIndex:
          prevState.selectedIndex === caller.props.images.length - 1
            ? 0
            : prevState.selectedIndex + 1
      }),
      () => {
        caller.scrollRef.current.scrollTo({
          animated: true,
          y: 0,
          x: DEVICE_WIDTH * caller.state.selectedIndex
        });
      }
    );
  }, 3000);
};
