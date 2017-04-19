import React from 'react';
import {
  TextInput,
  View
} from 'react-native';

export default ({ onChangeText, value, placeholder, keyboardType, secureTextEntry }) => <TextInput
  placeholder={placeholder}
  onChangeText={onChangeText}
  value={value}
  keyboardType={keyboardType}
  secureTextEntry={secureTextEntry}
  style={{flex: 1}}
/>;
