import {View, StyleProp, ViewStyle} from 'react-native';
import {COLORS} from '../constants/colors';
import {SvgIcon} from './SvgIcon';

import {Text} from './Text';

interface YieldTextProps {
  style?: StyleProp<ViewStyle>;
  value: number;
  amount?: number;
}

export function YieldText({value, style, amount}: YieldTextProps) {
  const isLestThanZero = value < 0;
  return (
    <View style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
      <SvgIcon name={isLestThanZero ? 'DownRightArrow' : 'UpRightArrow'} />
      <Text
        style={{
          marginLeft: 2,
          color: isLestThanZero ? '#EE8688' : COLORS.secondary,
        }}>
        {Math.abs(value)}%{amount && ` ($${amount})`}
      </Text>
    </View>
  );
}
