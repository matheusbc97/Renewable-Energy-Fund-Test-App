import {SafeAreaView, ScrollView} from 'react-native';
import {FundsList} from './components/FundsList';
import HomeBanner from './components/HomeBanner';

import HomeHeader from './components/HomeHeader';
import HomeOptions from './components/HomeOptions';

export function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <HomeHeader />
        <FundsList />
        <HomeBanner />
        <HomeOptions />
      </ScrollView>
    </SafeAreaView>
  );
}
