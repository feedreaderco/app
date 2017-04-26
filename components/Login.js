import React, { Component } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Modal,
  Settings,
  Text,
  TextInput,
} from 'react-native';
import Heading from './Heading';
import Logo from './Logo';
import api from '../api';

export default class Login extends Component {
  state = {
    modalOpen: true,
    error: '',
    settings: {
      username: '',
      password: '',
      token: '',
    }
  };

  login = () => {
    const { username, password } = this.state.settings;
    api(username).user.tokens.create(password).then(({ token }) => {
      this.setState({ settings: { username, password, token } });
      Settings.set(this.state.settings);
      this.setState({ modalOpen: false });
    })
    .catch((error) => {
      this.setState({ error });
    });
  };

  updateSettingsState = (key, value) => {
    const settings = this.state.settings;
    settings[key] = value;
    this.setState(settings);
  };

  render() {
    return (
      <Modal animationType="fade" visible={this.state.modalOpen}>
        <KeyboardAvoidingView 
          behavior="padding"
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 20,
          }} >
          <Logo /><Heading text="Welcome!"/>
          <Text>{this.state.error}</Text>
          <TextInput 
            placeholder="Username"
            onChangeText={(text) => this.updateSettingsState('username', text)}
            autoCorrect={false}
            autoFocus={true}
            autoCapitalize="none"
            value={this.state.settings.username}
            style={{flex: 1}}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => this.updateSettingsState('password', text)}
            value={this.state.settings.password}
            style={{flex: 1}}
          />
          <Button title="Login" onPress={this.login} />
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}
