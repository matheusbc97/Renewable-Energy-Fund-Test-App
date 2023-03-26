import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {TextLink, Text} from '../../../components';
import {StackNavigationProp} from '../../../navigation';

const Container = styled.View`
  align-items: center;
  margin-vertical: 13px;
`;

export default function LoginLinkToRegister() {
  const navigation = useNavigation<StackNavigationProp<'Login'>>();

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Container>
      <Text colorVariant="onBackgroundVariant">
        Don't have an account yet?{' '}
        <TextLink onPress={goToRegister}>Sign up</TextLink> here
      </Text>
    </Container>
  );
}
