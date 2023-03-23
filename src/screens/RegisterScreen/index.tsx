import {SafeAreaView} from 'react-native';
import {IStackScreenProps} from '../../navigation';

import RegisterSubHeader from './components/RegisterSubHeader';

import RegisterForm from './components/RegisterForm';
import RegisterLinkToLogin from './components/RegisterLinkToLogin';

export function RegisterScreen({}: IStackScreenProps<'Register'>) {
  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <RegisterSubHeader />

      <RegisterForm />

      <RegisterLinkToLogin />
    </SafeAreaView>
  );
}
