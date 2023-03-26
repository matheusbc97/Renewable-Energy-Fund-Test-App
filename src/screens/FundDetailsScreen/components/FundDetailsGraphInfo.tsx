import {Dimensions, View} from 'react-native';
import {Text} from '../../../components';
import {LineChart} from 'react-native-chart-kit';
import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';

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

export default function FundDetailsGraphInfo() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingTop: 26,
          justifyContent: 'space-between',
        }}>
        <Text variant="title-big">$18.23</Text>
        <Text variant="title-big">2022</Text>
      </View>

      <LineChart
        data={{
          labels: ['1h', '1d', '1w', '1m', '1y', 'All'],
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
          color: (opacity = 1) => COLORS.secondary,
          labelColor: (opacity = 1) => COLORS.onBackgroundVariant,
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
    </View>
  );
}
