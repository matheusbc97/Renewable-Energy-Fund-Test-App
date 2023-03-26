import styled from 'styled-components/native';

import {Text} from '../../../components';

const Container = styled.View`
  margin-vertical: 20px;
  align-items: center;
`;

export default function RegisterSubHeader() {
  return (
    <Container>
      <Text variant="title">Create your account</Text>
    </Container>
  );
}
