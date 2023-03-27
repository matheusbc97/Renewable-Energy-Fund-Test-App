import {SafeAreaView, ScrollView} from 'react-native';

import {IStackScreenProps} from '../../navigation';

import FundDetailsGraphInfo from './components/FundDetailsGraphInfo';
import FundDetailsInfoAndStats from './components/FundDetailsInfoAndStats';
import FundBreakDown from './components/FundBreakDown';
import FundUserPortfolio from './components/FundUserPortfolio';
import {useEffect} from 'react';

export function FundDetailsScreen({
  navigation,
}: IStackScreenProps<'FundDetails'>) {
  useEffect(() => {
    navigation.setOptions({title: 'FundDetails', subtitle: 'WFND'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <FundDetailsGraphInfo />
        <FundDetailsInfoAndStats />
        <FundBreakDown />
        <FundUserPortfolio />
      </ScrollView>
    </SafeAreaView>
  );
}
