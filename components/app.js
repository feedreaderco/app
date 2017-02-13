import React from 'react';
import {
  View
} from 'react-native';
import NavBar from './NavBar';
import Articles from './Articles';
import ToolBar from './ToolBar';

export default () => <View style={{ flex: 1 }}>
  <NavBar />
  <Articles />
  <ToolBar />
</View>;
