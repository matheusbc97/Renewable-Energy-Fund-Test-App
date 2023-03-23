import styled from 'styled-components/native';

import {TextLink, Text} from '../../../components';

const Container = styled.View`
  align-items: center;
  margin-vertical: 13px;
`;

export default function LoginLinkToRegister() {
  return (
    <Container>
      <Text colorVariant="onPrimary">
        Don't have an account yet?{' '}
        <TextLink onPress={() => {}}>Sign up</TextLink> here
      </Text>
    </Container>
  );
}
