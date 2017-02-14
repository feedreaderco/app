import React from 'react';
import BottomToolbar from 'react-native-bottom-toolbar';

export default () => <BottomToolbar actions={[
  { title: 'Add to Favorites', iconName: 'ios-heart-outline' },
  { title: 'Share', iconName: 'ios-share-outline' },
  { title: 'Read Later', iconName: 'ios-glasses-outline' },
]} />;
