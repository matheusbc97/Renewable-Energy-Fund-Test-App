import {Dimensions, SafeAreaView, View} from 'react-native';
import {Text} from '../../components';
import {LineChart} from 'react-native-chart-kit';
import styled from 'styled-components/native';

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
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingTop: 26,
          justifyContent: 'space-between',
        }}>
        <Text variant="title-big" colorVariant="onBackgroundVariant">
          $18.23
        </Text>
        <Text variant="title-big" colorVariant="onBackgroundVariant">
          2022
        </Text>
      </View>

      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: dataSetMock,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        withHorizontalLabels={false}
        withDots={false}
        withHorizontalLines={false}
        withVerticalLines={false}
        withShadow={false}
        chartConfig={{
          backgroundColor: '#FFF',
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => 'green',
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labels: [],
          propsForBackgroundLines: {
            color: '#FFF',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </SafeAreaView>
  );
}
