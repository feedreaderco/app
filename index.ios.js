import React, { Component } from 'react';
import App from './components/app';
import {
  AppRegistry,
} from 'react-native';
import ShareExtension from 'react-native-share-extension';

class FeedReaderShareExtension extends Component {
  async getData(){
    try {
        const data = await ShareExtension.data();
        return data;
    }
    catch(e) {
        console.log('caught error', e);
        // Handle exceptions
    }
  }

  render() {
    //const { type, value } = getData();
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('FeedReader', () => App);
AppRegistry.registerComponent('ShareExtension', () => FeedReaderShareExtension);
