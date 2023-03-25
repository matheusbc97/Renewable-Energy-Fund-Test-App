import {View} from 'react-native';
import styled from 'styled-components/native';
import {Text} from '../../../components';
import {COLORS} from '../../../constants/colors';

const FundsTitle = styled(Text)`
  padding-horizontal: 20;
  margin-top: 20;
`;

const FundsFlatList = styled.FlatList`
  padding-horizontal: 12;
  margin-top: 15;
`;

const FundListItemContainer = styled.View`
  border-width: 1px;
  border-color: ${COLORS.border};
  margin-horizontal: 6px;
  width: 140px;
  height: 145px;
  padding: 12px;
  border-radius: 3px;
`;

export function FundsList() {
  return (
    <View>
      <FundsTitle variant="title" colorVariant="onBackgroundVariant">
        Funds
      </FundsTitle>
      <FundsFlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        horizontal
        renderItem={() => (
          <FundListItemContainer>
            <Text variant="title-small">Wind Fund</Text>
            <View style={{flex: 1}} />
            <Text colorVariant="onBackgroundVariant">$1,245.23</Text>
          </FundListItemContainer>
        )}
      />
    </View>
  );
}
