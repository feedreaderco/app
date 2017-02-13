import React from 'react';
import {
  Dimensions,
  WebView,
  View
} from 'react-native';

export default () => {
  const uri = 'https://feedreader.co';
  const { height, width } = Dimensions.get('window');
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri }} style={{ flex: 1, height, width }}/>
    </View>
  );
}
