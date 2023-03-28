import {SafeAreaView, ScrollView} from 'react-native';

import {IStackScreenProps} from '../../navigation';

import FundDetailsGraphInfo from './components/FundDetailsGraphInfo';
import FundDetailsInfoAndStats from './components/FundDetailsInfoAndStats';
import FundBreakDown from './components/FundBreakDown';
import FundUserPortfolio from './components/FundUserPortfolio';
import {useEffect} from 'react';
import {FundDetailsProvider} from './stores/fund-details';
import {fundsAllMock} from '../../mocks/funds';

export function FundDetailsScreen({
  navigation,
  route,
}: IStackScreenProps<'FundDetails'>) {
  useEffect(() => {
    navigation.setOptions({subtitle: route.params.fund.name});
  }, [navigation, route.params.fund.name]);

  const fundAllInfos = fundsAllMock.find(
    item => item.fundId === route.params.fund.id,
  )!;

  console.log('fundAllInfos', fundAllInfos);
  console.log('route.params.fund', route.params.fund);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <FundDetailsProvider fundAllInfos={fundAllInfos}>
          <FundDetailsGraphInfo />
          <FundDetailsInfoAndStats />
          <FundBreakDown />
          <FundUserPortfolio />
        </FundDetailsProvider>
      </ScrollView>
    </SafeAreaView>
  );
}
