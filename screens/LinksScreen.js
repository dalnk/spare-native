import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Nearby',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.welcomeImage}
            />
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.welcomeImage}
            />
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.welcomeImage}
            />
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.welcomeImage}
            />
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.welcomeImage}
            />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  welcomeImage: {
    flex: 1,
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
});
