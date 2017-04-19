import React from 'react';
import {
  SegmentedControlIOS,
  View
} from 'react-native';

const values = ['Favorites', 'Unread', 'Reading List'];

export default ({ onChange }) => <View
  style={{
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
  }}>
  <SegmentedControlIOS
    values={values}
    selectedIndex={1}
    onChange={(event) => {
      onChange(values[event.nativeEvent.selectedSegmentIndex]);
    }}
  />
</View>;

