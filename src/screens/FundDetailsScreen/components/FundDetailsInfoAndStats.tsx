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

interface Fund {
  name: string;
  value: number;
  aum: number;
  issueDate: string;
  vintageRange: string;
  ter: number;
  priceAtClose: number;
  priceAtOpen: number;
}

const fund: Fund = {
  name: 'Wind Fund',
  value: 18.23,
  aum: 430.88,
  issueDate: '2020-01-01',
  vintageRange: '2010-2020',
  ter: 0.25,
  priceAtClose: 1.25,
  priceAtOpen: 1.13,
};

export default function FundDetailsInfoAndStats() {
  return (
    <Container>
      <Text variant="title">Info & Stats</Text>
      <LabeledValueRow>
        <LabeledValue label="AUM" value={`$${fund.aum}m`} />
        <LabeledValue label="Issue Date" value={fund.issueDate} />
      </LabeledValueRow>

      <LabeledValueRow>
        <LabeledValue label="Vintage Range" value={fund.vintageRange} />
        <LabeledValue label="TER" value={`${fund.ter}%`} />
      </LabeledValueRow>

      <LabeledValueRow>
        <LabeledValue label="Price at Close" value={`$${fund.priceAtClose}`} />
        <LabeledValue label="Price at Open" value={`$${fund.priceAtOpen}`} />
      </LabeledValueRow>
    </Container>
  );
}
