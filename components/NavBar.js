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
    values={['Unread', 'Favorites', 'Reading List']}
    selectedIndex={0}
    onChange={(event) => {
      onChange(event.nativeEvent.selectedSegmentIndex);
    }}
  />
</View>;

