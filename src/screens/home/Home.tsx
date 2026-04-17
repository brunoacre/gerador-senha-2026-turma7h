import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './HomeStyle';
import { Logo } from '../../components/logo/Logo';

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Meu primeiro componente!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


