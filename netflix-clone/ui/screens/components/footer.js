import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Dimensions,SafeAreaView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');


const Bottom_Navigation_Bar = () => {
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles_bottom_navigation_bar.container}>
        <TouchableOpacity
          style={styles_bottom_navigation_bar.button}
          onPress={() => navigation.navigate('Main')}
        >
          <Feather name="home" size={30} color="black" style={styles_bottom_navigation_bar.icon} />
          <Text style={styles_bottom_navigation_bar.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles_bottom_navigation_bar.button}
          onPress={() => navigation.navigate('News')}
        >
          <Feather name="box" size={30} color="black" style={styles_bottom_navigation_bar.icon} />
          <Text style={styles_bottom_navigation_bar.text}>News&Hot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles_bottom_navigation_bar.button}
          onPress={() => navigation.navigate('User')}
        >
          <Feather name="user" size={30} color="black" style={styles_bottom_navigation_bar.icon} />
          <Text style={styles_bottom_navigation_bar.text}>User</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

const styles_bottom_navigation_bar = StyleSheet.create({
    container: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
    },
    icon: {
        marginRight: 8,
        color:'white'
    },
    text: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
    },
});
  


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            button1: ['Home','home'],
            button2: ['News&Hot','box'],
            button3: ['User','user']
        };    
    }

    render() {
        return (
            <View style={{width:width,height:height/10,flexDirection:'row',justifyContent:'space-around'}}>
                <Bottom_Navigation_Bar />
            </View>
        );
    }
}



export default Footer;