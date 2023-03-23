import {View} from 'react-native';
//import {useNavigation} from '@react-navigation/native';

import {Button, SmartTextInput} from '../../../../components';
import useLoginForm from './hooks/useLoginForm';
//import {StackNavigationProp} from '../../../../navigation';

export default function LoginForm() {
  const {control, errors, handleSubmit} = useLoginForm();
  //const navigation = useNavigation<StackNavigationProp<'Login'>>();

  const onSubmit = data => console.log(data);

  return (
    <>
      <View style={{marginVertical: 5}}>
        <SmartTextInput
          label="E-mail"
          control={control}
          name="email"
          errorMessage={errors.email?.message}
        />

        <SmartTextInput
          label="Password"
          placeholder="Minimum 8 characters"
          control={control}
          name="password"
          errorMessage={errors.password?.message}
        />
      </View>
      <Button
        label="Login"
        style={{marginTop: 27}}
        onPress={handleSubmit(onSubmit)}
      />
    </>
  );
}
