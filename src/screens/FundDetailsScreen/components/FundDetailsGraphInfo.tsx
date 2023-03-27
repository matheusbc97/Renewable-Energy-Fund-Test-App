import {Dimensions, TouchableOpacity, View} from 'react-native';
import {Text, YieldText} from '../../../components';
import {LineChart} from 'react-native-chart-kit';
import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';
import {useState} from 'react';

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

const labels = ['1h', '1d', '1w', '1m', '1y', 'All'];

export default function FundDetailsGraphInfo() {
  const [selectedLabelIndex, setSelectedLabelIndex] = useState(0);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingTop: 26,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text variant="title-big">$18.23</Text>
          <YieldText value={3.51} amount={1.25} />
        </View>
        <Text variant="title-big">2022</Text>
      </View>

      <LineChart
        data={{
          labels: [],
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
          propsForBackgroundLines: {
            color: '#FFF',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        {labels.map((label, index) => {
          const isSelected = selectedLabelIndex === index;
          return (
            <TouchableOpacity
              onPress={() => setSelectedLabelIndex(index)}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 9,
                borderRadius: 4,
                backgroundColor: isSelected ? COLORS.primaryVariant : undefined,
              }}>
              <Text
                key={label}
                colorVariant={
                  isSelected ? 'onPrimaryVariant' : 'onBackgroundVariant'
                }>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
