import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Login from './Login';
import NavBar from './NavBar';
import Articles from './Articles';
import ToolBar from './ToolBar';

export default class App extends Component {
  state = {
    page: 'Unread',
  };

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Login />
        <NavBar onChange={(page) => this.setState({ page })} />
        <Articles page={this.state.page} />
        <ToolBar />
      </View>
    );
  }
}
