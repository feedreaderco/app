import React, { Component } from 'react';
import { Settings } from 'react-native';
import ShareExtension from 'react-native-share-extension';
import Login from './components/Login';
import Folders from './components/Folders';

export default class FeedReaderShareExtension extends Component {
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
    if (!Settings.get('password')) {
      return <Login />;
    }
    return <Folders />;
  }
}
