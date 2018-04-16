import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import ShelfCard from '../components/ShelfCard';

export default class NearbyScreen extends React.Component {
  static navigationOptions = {
    title: 'Nearby',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
           <ShelfCard 
            title={"Community Shelf"}/>
<ShelfCard 
  title={"Dennis' Shelf"}/>
<ShelfCard 
  title={"Book Shelf"}/>
<ShelfCard 
  title={"Your Shelf"}/>

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
  },
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
