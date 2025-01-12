import React from 'react';
import { StyleSheet, View, Text,ScrollView,Image,Dimensions,FlatList, SafeAreaView } from 'react-native';
import Header from './components/header';
import Poster from './components/poster';
import List from './components/list';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <ScrollView>
          <Poster/>
          <List/>
        </ScrollView>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('screen').width.toFixed(2),
    // height:Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:200,
    backgroundColor: 'black',
  },
});
