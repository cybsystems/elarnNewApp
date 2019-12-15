import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Button,
} from "native-base";

const cards = [
  {
    text: "Card One",
    name: "One",
    image:
      "https://adanimate.com/wp-content/uploads/2018/03/ei003-1000x783.jpg",
  },
  {
    text: "Card two",
    name: "Two",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeBrVatyKI8ResAGGreQg-iA46KWSuk0ps1MmzRWYbcwxpvPQx",
  },
];
export default class DeckSwiperAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <View>
          <DeckSwiper
            ref={c => (this._deckSwiper = c)}
            dataSource={cards}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: item.image }} />
                    <Body>
                      <Text>
                        {item.text}
                      </Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{ height: 250, flex: 1 }}
                    source={{ uri: item.image }}
                  />
                </CardItem>
              </Card>}
          />
        </View>
      </Container>
    );
  }
}
