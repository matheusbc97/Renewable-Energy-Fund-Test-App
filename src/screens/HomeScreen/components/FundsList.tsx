import {useNavigation} from '@react-navigation/native';
import {FlatList, View} from 'react-native';
import styled from 'styled-components/native';
import {Text, YieldText} from '../../../components';
import {COLORS} from '../../../constants/colors';
import {fundsAllMock, fundsMock} from '../../../mocks/funds';
import {StackNavigationProp} from '../../../navigation';

const FundsTitle = styled(Text)`
  padding-horizontal: 20px;
  margin-top: 20px;
`;

const FundsFlatList = styled.FlatList`
  padding-horizontal: 12px;
  margin-top: 15px;
` as unknown as typeof FlatList;

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
        data={fundsAllMock.map(item => item.fund)}
        horizontal
        keyExtractor={fund => fund.id.toString()}
        renderItem={({item: fund}) => (
          <FundListItemContainer
            onPress={() => navigation.navigate('FundDetails', {fund})}>
            <Text variant="title-small">{fund.name}</Text>
            <View style={{flex: 1}} />
            <Footer>
              <Text>${fund.value}</Text>
              <YieldText value={fund.yield} />
            </Footer>
          </FundListItemContainer>
        )}
      />
    </View>
  );
}
