import {SafeAreaView} from 'react-native';
import {FundsList} from './components/FundsList';
import HomeBanner from './components/HomeBanner';

import HomeHeader from './components/HomeHeader';
import HomeOptions from './components/HomeOptions';

export function HomeScreen() {
  return (
    <SafeAreaView>
      <HomeHeader />
      <FundsList />
      <HomeBanner />
      <HomeOptions />
    </SafeAreaView>
  );
}
