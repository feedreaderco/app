import React, { Component } from 'react';
import {
  View
} from 'react-native';
import lib from '../api';
import Folder from './Folder';

export default class Folders extends Component {
  render() {
    const username = settings.get('username');
    const password = settings.get('password');
    const api = lib({ username, password });
    api.user.folders.get(url).then(res => {
      const isSelected = (folder) => res.folders.indexOf(folder) !== -1;
      const folders = res.allFolders.map((folder) => {
        return <Folder name={folder} selected={isSelected(folder)} />;
      });
      return (
        <View style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          { folders }
        </View>
      );
    });
  }
}
