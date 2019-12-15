import React, { Component } from "react";
import {
  Content,
  Body,
  Card,
  CardItem,
  Container,
  Button,
  Header,
  Text,
  Left,
  Icon,
  Item,
  Input
} from "native-base";
import { BackHandler, NativeModules } from "react-native";
import { updateRawData } from "../redux/actions";
import { removeData } from "../storage";
import DeckSwiperAdvancedExample from "../components/DeckSwiperAdvancedExample";
import RecentVideosAndNotes from "../components/RecentVideosAndNotes";

export default class HomePage extends Component {
  componentDidMount() {
    updateRawData({ statusBarColor: "#7e30b0" });
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackPress
    );
  }

  handleBackPress = () => {
    BackHandler.exitApp();
    return true;
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }
  render() {
    const images = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeBrVatyKI8ResAGGreQg-iA46KWSuk0ps1MmzRWYbcwxpvPQx",
      ,
      "https://adanimate.com/wp-content/uploads/2018/03/ei003-1000x783.jpg"
    ];
    return (
      <Container>
        <Header searchBar>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Recommended")}
            />
          </Left>
          <Item>
            <Input placeholder={"Search Anything"} />
          </Item>
        </Header>

        <Content>
          <RecentVideosAndNotes images={images} />
        </Content>
      </Container>
    );
  }
}
