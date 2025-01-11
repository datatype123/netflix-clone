import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');


const Bottom_Navigation_Bar = () => {
    const navigation = useNavigation();
    return (
      <View style={styles_bottom_navigation_bar.container}>
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
      </View>
    );
  };

const styles_bottom_navigation_bar = StyleSheet.create({
    container: {
        width: width,
        height: height/7,
        flexDirection: 'row', // Align buttons horizontally
        justifyContent: 'space-between', // Space buttons evenly
        alignItems: 'center', // Center vertically
        backgroundColor: 'black', // Bottom navigation background color
        // height: 50, // Height of the bottom navigation bar
        paddingHorizontal: 10, // Horizontal padding for spacing
        paddingVertical: 5, // Vertical padding for spacing
    },
    button: {
        flexDirection: 'row', // Align icon and text in a row
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
        paddingHorizontal: 10, // Horizontal padding for spacing
        paddingVertical: 5, // Vertical padding for spacing
        marginHorizontal: 10, // Horizontal margin for spacing
    },
    icon: {
        marginRight: 8, // Space between the icon and text
        color:'white'
    },
    text: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',// Uppercase text
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
            <View style={{width:width,height:height/8,flexDirection:'row',justifyContent:'space-around',marginBottom:10,marginTop:10}}>
                <Bottom_Navigation_Bar />
            </View>
        );
    }
}



export default Footer;