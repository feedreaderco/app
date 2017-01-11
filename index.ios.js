import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Linking,
  TabBarIOS,
  Text,
  StyleSheet,
  WebView,
  View
} from 'react-native';
import ShareExtension from 'react-native-share-extension';

export default class FeedReader extends Component {
  componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL(event) {
    console.log(event.url);
  }

  render() {
    const uri = 'https://feedreader.co';
    const {height, width} = Dimensions.get('window');
    console.log(uri, height, width);
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ uri }} style={{ width, height }}/>
        <TabBarIOS>
          <TabBarIOS.Item title={'\u2606'} />
        </TabBarIOS>
      </View>
    );
  }
}

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

AppRegistry.registerComponent('FeedReader', () => FeedReader);
AppRegistry.registerComponent('ShareExtension', () => FeedReaderShareExtension);
