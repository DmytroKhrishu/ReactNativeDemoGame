import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
});
