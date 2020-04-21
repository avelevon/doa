import React from 'react';
import { Button, Alert, StyleSheet, Text, View } from 'react-native';
import MainContainer from "./src/MainContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <MainContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
