import styled from 'styled-components/native';

import {LabeledValueWithInfoButton, Text} from '../../../components';
import {useFundDetailsSelector} from '../stores/fund-details';

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
  const fund = useFundDetailsSelector(state => state.fund);

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
