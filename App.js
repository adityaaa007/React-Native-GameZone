import * as Font from 'expo-font';
import { useState } from "react";
import AppLoading from 'expo-app-loading';
import Navigator from './routes/Drawer';

const getFonts = async () => {
  try {
    await Font.loadAsync({
      'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf')
    });
    // Fonts loaded successfully
    return true;
  } catch (error) {
    console.error('Error loading fonts:', error);
    // Handle the error as needed
    return false;
  }
};


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Navigator />
    );
  }
  else {
    return (
      <AppLoading 
        startAsync = {getFonts}
        onError={console.warn}
        onFinish = {() => setFontsLoaded(true)}
      />
    );
  }
}
