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

export default class Feedreader extends Component {
  render() {
    const uri = 'https://feedreader.co';
    const {height, width} = Dimensions.get('window');
    console.log(uri, height, width);
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ uri }} style={{ width, height }}/>
        <TabBarIOS>
          <TabBarIOS.Item title={'\u2606'} style={{ fontSize: 10 }}/>
        </TabBarIOS>
      </View>
    );
  }
}

AppRegistry.registerComponent('Feedreader', () => Feedreader);
