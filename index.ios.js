import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './components/app';
import ShareExtension from './share-extension.ios';

AppRegistry.registerComponent('FeedReader', () => App);
AppRegistry.registerComponent('ShareExtension', () => ShareExtension);
