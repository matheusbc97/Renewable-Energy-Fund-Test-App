import {View} from 'react-native';
import {COLORS} from '../constants/colors';

export function Avatar() {
  return (
    <View
      style={{
        backgroundColor: COLORS.onBackground,
        width: 32,
        height: 32,
        borderRadius: 16,
      }}
    />
  );
}
