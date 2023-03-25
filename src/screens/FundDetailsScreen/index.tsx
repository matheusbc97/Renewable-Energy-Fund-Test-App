import {Dimensions, SafeAreaView, View} from 'react-native';
import {Text} from '../../components';
import {LineChart} from 'react-native-chart-kit';
import styled from 'styled-components/native';
import FundDetailsGraphInfo from './components/FundDetailsGraphInfo';
import FundDetailsInfoAndStats from './components/FundDetailsInfoAndStats';

const Container = styled.View`
  flex-direction: row;
  padding: 20px;
  padding-top: 26px;
  justify-content: space-between;
`;

export const Info = () => {
  return (
    <Container>
      <Text variant="title-big" colorVariant="onBackgroundVariant">
        $18.23
      </Text>
      <Text variant="title-big" colorVariant="onBackgroundVariant">
        2022
      </Text>
    </Container>
  );
};

const dataSetMock = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
];

export function FundDetailsScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FundDetailsGraphInfo />
      <FundDetailsInfoAndStats />
    </SafeAreaView>
  );
}
