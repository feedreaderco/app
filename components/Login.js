import React, { Component } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Modal,
  Settings,
  TextInput
} from 'react-native';

export default class Login extends Component {
  state = {
    modalOpen: true,
    settings: {
      username: '',
      password: ''
    }
  };

  login() {
    Settings.set(this.state.settings);
    this.setState({modalOpen: false});
  }

  updateSettingsState(key, value) {
    const settings = this.state.settings;
    console.log(settings);
    settings[key] = value;
    this.setState(settings);
  }

  render() {
    return (
      <Modal animationType="fade" visible={this.state.modalOpen}>
        <KeyboardAvoidingView 
          behavior="padding"
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
          <TextInput 
            placeholder="Username"
            onChangeText={(text) => this.updateSettingsState('username', text)}
            value={this.state.settings.username}
            style={{flex: 1}} />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => this.updateSettingsState('password', text)}
            value={this.state.settings.password}
            style={{flex: 1}} />
          <Button title="Login" onPress={this.login} />
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}
