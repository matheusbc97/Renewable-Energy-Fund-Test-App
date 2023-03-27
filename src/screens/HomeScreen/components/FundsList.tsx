import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Text, YieldText} from '../../../components';
import {COLORS} from '../../../constants/colors';
import {StackNavigationProp} from '../../../navigation';

const FundsTitle = styled(Text)`
  padding-horizontal: 20px;
  margin-top: 20px;
`;

const FundsFlatList = styled.FlatList`
  padding-horizontal: 12px;
  margin-top: 15px;
`;

const FundListItemContainer = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${COLORS.border};
  margin-horizontal: 6px;
  width: 150px;
  height: 155px;
  padding: 10px;
  border-radius: 3px;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export function FundsList() {
  const navigation =
    useNavigation<StackNavigationProp<'BottomTabsNavigator'>>();

  return (
    <View>
      <FundsTitle variant="title">Funds</FundsTitle>
      <FundsFlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        horizontal
        renderItem={() => (
          <FundListItemContainer
            onPress={() => navigation.navigate('FundDetails')}>
            <Text variant="title-small">Wind Fund</Text>
            <View style={{flex: 1}} />
            <Footer>
              <Text>$1,245.23</Text>
              <YieldText value={0.25} />
            </Footer>
          </FundListItemContainer>
        )}
      />
    </View>
  );
}
