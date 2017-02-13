import React from 'react';
import {
  SegmentedControlIOS,
  View
} from 'react-native';

export default ({ onChange }) => <View style={{ padding: 20 }}>
  <SegmentedControlIOS
    values={['Unread', 'Favorites', 'Reading List']}
    selectedIndex={0}
    onChange={(event) => {
      onChange(event.nativeEvent.selectedSegmentIndex);
    }}
  />
</View>;

