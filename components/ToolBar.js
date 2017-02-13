import React from 'react';
import BottomToolbar from 'react-native-bottom-toolbar';

export default () => <BottomToolbar actions={[
  { title: 'Mark As Read', iconName: 'ios-archive-outline' },
  { title: 'Share', iconName: 'ios-share-outline' },
  { title: 'Star', iconName: 'ios-star-outline' },
]} />;
