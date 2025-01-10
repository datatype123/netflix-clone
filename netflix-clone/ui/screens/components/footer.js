import React from "react";
import {View,Text, Button} from 'react-native';
import { Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('screen');

const Button_Component = ({name,title}) => {
    return(
        <Button title={name} onPress={() => console.log(name)}>
            <View>
                <Feather name={title} size={30} color="black"></Feather>
            </View>
        </Button>
    )
}


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
            <View style={{ width:width,height:50,flexDirection:'row',justifyContent:'space-around'}}>
                <Button_Component name={this.state.button1[0]} title={this.state.button1[1]}></Button_Component>
                <Button_Component name={this.state.button2[0]} title={this.state.button2[1]}></Button_Component>
                <Button_Component name={this.state.button3[0]} title={this.state.button3[1]}></Button_Component>
            </View>
        );
    }
}



export default Footer;