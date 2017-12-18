import React, { Component } from 'react';
import WebView from 'react-native-webview-autoheight';

export default ({ id }) => <WebView
  source={{
    uri: `https://feedreader.co/articles/${id}/body`
  }}
  startInLoadingState={true}
/>;
