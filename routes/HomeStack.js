
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={
      ({ navigation }) => {
        return{ headerTitle: () => <Header navigation={navigation} title='GameZone'/>};
      }
    }/>
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
  </Stack.Navigator>
);

export default HomeStack;

