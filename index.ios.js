import React, { Component } from 'react';
import {
  AppRegistry,
  Linking,
  NavigatorIOS
} from 'react-native';
import App from './components/app';
import ShareExtension from './share-extension.ios';

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
    return (
      <NavigatorIOS
        style={{ flex: 1 }}
        initialRoute={{
          component: App,
          title: 'Unread Articles',
          passProps: { title: 'Unread Articles' }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('FeedReader', () => FeedReader);
AppRegistry.registerComponent('ShareExtension', () => ShareExtension);
