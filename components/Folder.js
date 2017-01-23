import React, { Component } from 'react';
import {
  Button
} from 'react-native';

export default class Folder extends Component {
  render() {
    return (
      <Button title={this.props.folderName} />
    );
  }
}
