import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {
  Button,
  EmailSmartTextInput,
  PasswordSmartTextInput,
} from '../../../../components';
import useLoginForm from './hooks/useLoginForm';
import {StackNavigationProp} from '../../../../navigation';

const Container = styled.View`
  margin-vertical: 5px;
`;

export default function LoginForm() {
  const {control, errors, handleSubmit} = useLoginForm();
  const navigation = useNavigation<StackNavigationProp<'Login'>>();

  const onSubmit = () => {
    navigation.replace('BottomTabsNavigator');
  };

  return (
    <>
      <Container>
        <EmailSmartTextInput
          control={control}
          name="email"
          errorMessage={errors.email?.message}
        />

        <PasswordSmartTextInput
          name="password"
          control={control}
          errorMessage={errors.password?.message}
        />
      </Container>
      <Button
        label="Login"
        style={{marginTop: 27}}
        onPress={handleSubmit(onSubmit)}
      />
    </>
  );
}
