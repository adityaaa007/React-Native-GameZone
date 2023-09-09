
import React from "react";
import { View, Text, Image } from "react-native";
import { styles, images } from "../styles/global";
import Card from "../shared/Card";

export default function ReviewDetails({ route, navigation }) {
  const item = route.params;
  const rating = item.rating;

  return (
    <View style={styles.container}>
      <Card>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={styles.ratings}>
          <Text>Rating: </Text>
          <Image source={images.ratings[rating]}></Image>
        </View>
      </Card>
    </View>
  );
}



