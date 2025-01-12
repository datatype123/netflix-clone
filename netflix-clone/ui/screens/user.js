import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, World!',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default User;

