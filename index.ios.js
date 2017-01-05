import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  TabBarIOS,
  Text,
  StyleSheet,
  WebView,
  View
} from 'react-native';

export default class FeedReader extends Component {
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

AppRegistry.registerComponent('FeedReader', () => FeedReader);
