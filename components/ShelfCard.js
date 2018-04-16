import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';

export default class ShelfCard extends React.Component {
  static navigationOptions = {
    title: 'Nearby',
  };

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'black',
    margin: 10,
    height: 200,
    borderRadius: 10
  },
  title: {
    fontSize: 40,
    marginTop: 5,
    marginLeft: 15,
    color: "white"
  }
});
