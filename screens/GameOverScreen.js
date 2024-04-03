import { Text, View } from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({ onRestart }) {
  return (
    <View>
      <Title>Game is over!</Title>
      <PrimaryButton onPress={onRestart}>Try again</PrimaryButton>
    </View>
  );
}
