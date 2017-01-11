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
import BottomToolbar from 'react-native-bottom-toolbar';

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
