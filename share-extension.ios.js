import React, { Component } from 'react';
import ShareExtension from 'react-native-share-extension';

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
    //const { type, value } = getData();
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  }
}
