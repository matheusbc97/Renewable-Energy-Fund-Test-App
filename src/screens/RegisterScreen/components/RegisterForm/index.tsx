import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  EmailSmartTextInput,
  PasswordSmartTextInput,
  SmartTextInput,
  Text,
  SmartCheckBoxInput,
} from '../../../../components';
import useRegisterForm from './hooks/useRegisterForm';
import {StackNavigationProp} from '../../../../navigation';

const Container = styled.View`
  margin-vertical: 5px;
`;

const CreateAccountButton = styled(Button)`
  margin-top: 27px;
`;

export default function RegisterForm() {
  const {control, errors, handleSubmit} = useRegisterForm();
  const navigation = useNavigation<StackNavigationProp<'Login'>>();

  const onValidSubmit = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <Container>
        <SmartTextInput
          label="First Name"
          control={control}
          name="firstName"
          errorMessage={errors.firstName?.message}
        />

        <SmartTextInput
          label="Last Name"
          control={control}
          name="lastName"
          errorMessage={errors.firstName?.message}
        />

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

        <SmartCheckBoxInput
          control={control}
          name="agreedToTerms"
          errorMessage={errors.agreedToTerms?.message}>
          I am over 18 years of age and I have read and agree to the{' '}
          <Text colorVariant="onBackgroundVariant">Terms of Service</Text> and{' '}
          <Text colorVariant="onBackgroundVariant">Privacy policy</Text>.
        </SmartCheckBoxInput>
      </Container>
      <CreateAccountButton
        label="Create Account"
        onPress={handleSubmit(onValidSubmit)}
      />
    </>
  );
}
