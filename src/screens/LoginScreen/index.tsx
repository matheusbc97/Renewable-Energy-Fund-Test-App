import {SafeAreaView} from 'react-native';
import {IStackScreenProps} from '../../navigation';

import LoginSubHeader from './components/LoginSubHeader';
import LoginButton from './components/LoginButton';
import LoginForm from './components/LoginForm';
import LoginLinkToRegister from './components/LoginLinkToRegister';

export function LoginScreen({}: IStackScreenProps<'Login'>) {
  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <LoginSubHeader />

      <LoginForm />

      <LoginButton />

      <LoginLinkToRegister />
    </SafeAreaView>
  );
}
