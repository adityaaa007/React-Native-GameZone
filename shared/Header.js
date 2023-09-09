import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/global';

export default function Header({ navigation,title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <TouchableOpacity onPress={openMenu} style={styles.icon}>
        <MaterialIcons name='menu' size={24}></MaterialIcons>
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerIcon}></Image>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}