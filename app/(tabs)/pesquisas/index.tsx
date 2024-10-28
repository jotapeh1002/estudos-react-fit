import { Tabs } from 'expo-router';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function Home() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text> pesquisas</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
