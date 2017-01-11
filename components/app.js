import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  Text,
  StyleSheet,
  WebView,
  View
} from 'react-native';
import BottomToolbar from 'react-native-bottom-toolbar';

export default class App extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    const uri = 'https://feedreader.co';
    const { height, width } = Dimensions.get('window');
    console.log(uri, height, width, this.props.title);
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
