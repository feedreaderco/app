import React, { Component } from 'react';
import {
  Dimensions,
  Linking,
  Text,
  StyleSheet,
  WebView,
  View
} from 'react-native';
import BottomToolbar from 'react-native-bottom-toolbar';

export default class App extends Component {
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
    const { height, width } = Dimensions.get('window');
    console.log(uri, height, width);
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <WebView source={{ uri }} style={{ flex: 1, height, width }}/>
        </View>
        <BottomToolbar actions={[
          // note the extra spaces needed for perfect alignment
          { title: 'Mark As Read', iconName: 'ios-archive-outline' },
          { title: 'Read Later', iconName: 'ios-glasses-outline' },
          { title: 'Share', iconName: 'ios-share-outline' },
          { title: 'Star', iconName: 'ios-star-outline' },
          { title: 'Label', iconName: 'ios-bookmarks-outline' },
        ]} />
      </View>
    );
  }
}
