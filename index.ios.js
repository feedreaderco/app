import React, { Component } from 'react';
import {
  AppRegistry,
  Linking,
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
    return <App/>;
  }
}

AppRegistry.registerComponent('FeedReader', () => FeedReader);
AppRegistry.registerComponent('ShareExtension', () => ShareExtension);
