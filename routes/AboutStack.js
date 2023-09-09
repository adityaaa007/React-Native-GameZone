
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from '../shared/Header';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator initialRouteName="GameZone" headerMode="screen">
      <Stack.Screen
        name="About"
        component={About}
        options={
          ({ navigation }) => {
            return{ headerTitle: () => <Header navigation={navigation} title='About GameZone'/>};
          }
        }/>
    </Stack.Navigator>
  );
}

