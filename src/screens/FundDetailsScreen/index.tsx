import {SafeAreaView, ScrollView} from 'react-native';

import FundDetailsGraphInfo from './components/FundDetailsGraphInfo';
import FundDetailsInfoAndStats from './components/FundDetailsInfoAndStats';
import FundBreakDown from './components/FundBreakDown';
import FundUserPortfolio from './components/FundUserPortfolio';

export function FundDetailsScreen() {
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
