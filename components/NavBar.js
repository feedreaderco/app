import React from 'react';
import {
  SegmentedControlIOS,
  View
} from 'react-native';

export default ({ onChange }) => <View
  style={{
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
  }}>
  <SegmentedControlIOS
    values={['Favorites', 'Unread', 'Reading List']}
    selectedIndex={1}
    onChange={(event) => {
      onChange(event.nativeEvent.selectedSegmentIndex);
    }}
  />
</View>;

