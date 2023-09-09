import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/global';

export default function Card(props) {
  return(
    <View style={styles.card}>
      {props.children}
    </View>
  )
}
