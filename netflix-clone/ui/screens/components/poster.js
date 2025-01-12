import React from "react";
import { Dimensions, Text, View, StyleSheet, ImageBackground } from "react-native";

class Poster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get('screen').width,
            screenHeight: Dimensions.get('screen').height,
        };
    }

    render() {
        const { screenWidth, screenHeight } = this.state;
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../../assets/jumanji.jpg')}
                    style={{
                        width: screenWidth * 0.8,
                        height: screenHeight * 0.6,
                        justifyContent: 'flex-end', // Align content at the bottom
                    }}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.title}>Jumanji: The Next Level</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // Netflix-like dark background
        padding: 20,
    },
    overlay: {
        width: '100%',
        height: 100,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background simulating blur
    },
    title: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#fff',
        textAlign: 'center',
    },
});

export default Poster;
