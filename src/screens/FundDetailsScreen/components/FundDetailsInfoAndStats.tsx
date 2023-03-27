import styled from 'styled-components/native';

import {LabeledValueWithInfoButton, Text} from '../../../components';

const Container = styled.View`
  padding-horizontal: 20px;
  margin-top: 40px;
`;

const LabeledValueRow = styled.View`
  flex-direction: row;
  margin-top: 18px;
`;

const LabeledValue = styled(LabeledValueWithInfoButton)`
  flex: 1;
  justify-content: space-between;
`;

export default function FundDetailsInfoAndStats() {
  return (
    <Container>
      <Text variant="title">Info & Stats</Text>
      <LabeledValueRow>
        <LabeledValue label="AUM" value="$430.88m" />
        <LabeledValue label="Issue Date" value="$430.88m" />
      </LabeledValueRow>

      <LabeledValueRow>
        <LabeledValue label="Vintage Range" value="$430.88m" />
        <LabeledValue label="TER" value="$430.88m" />
      </LabeledValueRow>

      <LabeledValueRow>
        <LabeledValue label="Price at Close" value="$430.88m" />
        <LabeledValue label="Price at Open" value="$430.88m" />
      </LabeledValueRow>
    </Container>
  );
}
