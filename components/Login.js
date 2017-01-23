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

  render() {
    return (
      <Modal animationType="fade" visible={this.state.modalOpen}>
        <KeyboardAvoidingView behavior="padding">
          <TextInput placeholder="Username" value={this.state.settings.username} />
          <TextInput placeholder="Password" value={this.state.settings.password} />
        </KeyboardAvoidingView>
        <Button title="Login" onPress={this.login} />
      </Modal>
    );
  }
}
