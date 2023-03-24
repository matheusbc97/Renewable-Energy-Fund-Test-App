import {View, StyleProp, ViewStyle} from 'react-native';
import {COLORS} from '../constants/colors';

export interface HorizontalSeparatorProps {
  style?: StyleProp<ViewStyle>;
}

export function HorizontalSeparator({style}: HorizontalSeparatorProps) {
  return <View style={[{height: 1, backgroundColor: COLORS.border}, style]} />;
}
