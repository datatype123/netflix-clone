import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default function News() {
  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"black"
  }
});
