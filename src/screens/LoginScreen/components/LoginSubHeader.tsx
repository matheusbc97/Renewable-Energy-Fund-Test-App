import styled from 'styled-components/native';

import {Text} from '../../../components';

const Container = styled.View`
  margin-vertical: 20px;
  align-items: center;
`;

export default function LoginSubHeader() {
  return (
    <Container>
      <Text variant="title" colorVariant="onPrimaryVariant">
        Login
      </Text>
    </Container>
  );
}
