import {SafeAreaView} from 'react-native';
import {IStackScreenProps} from '../../navigation';

import LoginSubHeader from './components/LoginSubHeader';

import LoginForm from './components/LoginForm';
import LoginLinkToRegister from './components/LoginLinkToRegister';

export function LoginScreen({}: IStackScreenProps<'Login'>) {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <LoginSubHeader />

      <LoginForm />

      <LoginLinkToRegister />
    </SafeAreaView>
  );
}
