import React from "react";
import {View , Text, Button, StyleSheet,Dimensions,Image, Touchable, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/netflix.png')} style={{width:100,height:50,resizeMode:"contain"}}/>
            <TouchableOpacity onPress={() => {console.log('Pressed')}} >
                <Feather  name="search" size={40} style={styles.icon}></Feather>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width:width,
        // height:height/8,
        backgroundColor: 'black',
        // marginTop:30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
      },
      icon:{
        color:'white',
        size:40,
        padding:20
      },
      text: {
        fontSize: 20,
        color: 'white',
      },
});

export default Header;