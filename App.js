import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function numberPickerHandler(pickedNumber){
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onNumberPicked={numberPickerHandler} />;

  if(userNumber){
    screen = <GameScreen />
  }
 
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={{ opacity: 0.3 }}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
