import React, { Component } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  WebView,
  View
} from 'react-native';

export default ({ id }) => {
  const { height, width } = Dimensions.get('window');
  const uri = `https://feedreader.co/articles/${id}/body`;
  return (
    <WebView source={{ uri }} style={{ flex: 1, height, width }} />
  );
};
