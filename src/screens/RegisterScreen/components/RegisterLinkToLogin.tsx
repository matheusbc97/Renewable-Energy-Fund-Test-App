import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {TextLink, Text} from '../../../components';
import {StackNavigationProp} from '../../../navigation';

const Container = styled.View`
  align-items: center;
  margin-vertical: 13px;
`;

export default function RegisterLinkToLogin() {
  const navigation = useNavigation<StackNavigationProp<'Login'>>();

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Container>
      <Text colorVariant="onBackgroundVariant">
        Already have an account?{' '}
        <TextLink onPress={goToLogin}>Log in here</TextLink>
      </Text>
    </Container>
  );
}
