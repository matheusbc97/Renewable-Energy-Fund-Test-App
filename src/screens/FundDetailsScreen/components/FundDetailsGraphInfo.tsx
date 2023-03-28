import {useState} from 'react';
import {Dimensions, View} from 'react-native';
import styled from 'styled-components/native';

import {Text, YieldText, LineChart} from '../../../components';
import {COLORS} from '../../../constants/colors';

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

const Header = styled.View`
  flex-direction: row;
  padding-horizontal: 20px;
  padding-top: 26px;
  justify-content: space-between;
`;

const GraphContainer = styled.View`
  margin-vertical: 8px;
`;

const LabelsRow = styled.View`
  flex-direction: row;
  padding-horizontal: 20px;
  justify-content: space-between;
`;

const LabelButton = styled.TouchableOpacity`
  padding-vertical: 8px;
  padding-horizontal: 9px;
  border-radius: 4px;
`;

export default function FundDetailsGraphInfo() {
  const [selectedLabelIndex, setSelectedLabelIndex] = useState(0);

  return (
    <View>
      <Header>
        <View>
          <Text variant="title-big">$18.23</Text>
          <YieldText value={3.51} amount={1.25} />
        </View>
        <Text variant="title-big">2022</Text>
      </Header>

      <GraphContainer>
        <LineChart
          dataSet={dataSetMock}
          height={220}
          width={Dimensions.get('window').width}
        />
      </GraphContainer>

      <LabelsRow>
        {labels.map((label, index) => {
          const isSelected = selectedLabelIndex === index;
          return (
            <LabelButton
              onPress={() => setSelectedLabelIndex(index)}
              style={{
                backgroundColor: isSelected ? COLORS.primaryVariant : undefined,
              }}>
              <Text
                key={label}
                colorVariant={
                  isSelected ? 'onPrimaryVariant' : 'onBackgroundVariant'
                }>
                {label}
              </Text>
            </LabelButton>
          );
        })}
      </LabelsRow>
    </View>
  );
}
