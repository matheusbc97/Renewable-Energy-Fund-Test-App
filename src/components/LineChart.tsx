import {LineChart as ChartKitLineChart} from 'react-native-chart-kit';
import styled from 'styled-components/native';

import {COLORS} from '../constants/colors';

export interface ILineChartProps {
  dataSet: number[];
  width: number;
  height: number;
}
const graphMarginLeft = 60;

const GraphContainer = styled.View``;

export function LineChart({dataSet, height, width}: ILineChartProps) {
  return (
    <GraphContainer style={{backgroundColor: 'red', overflow: 'hidden'}}>
      <ChartKitLineChart
        data={{
          labels: [],
          datasets: [
            {
              data: dataSet,
            },
          ],
        }}
        width={width + graphMarginLeft + 30} // from react-native
        height={height}
        withHorizontalLabels={false}
        withDots={false}
        withHorizontalLines={false}
        withVerticalLines={false}
        withShadow={false}
        style={{marginLeft: -graphMarginLeft}}
        chartConfig={{
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          color: () => COLORS.secondary,
          labelColor: () => COLORS.onBackgroundVariant,
        }}
      />
    </GraphContainer>
  );
}
