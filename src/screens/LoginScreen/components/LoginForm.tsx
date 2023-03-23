import {View} from 'react-native';
import React from 'react';
import {TextInput} from '../../../components';

export default function LoginForm() {
  return (
    <View style={{marginVertical: 5}}>
      <TextInput label="E-mail" />
      <TextInput label="Password" />
    </View>
  );
}
