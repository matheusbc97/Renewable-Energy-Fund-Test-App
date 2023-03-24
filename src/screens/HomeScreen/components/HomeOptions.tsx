import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {COLORS} from '../../../constants/colors';

interface HomeOptionProps {
  style?: StyleProp<ViewStyle>;
}

function HomeOption({style}: HomeOptionProps) {
  return (
    <View
      style={[
        {
          backgroundColor: COLORS.border,
          height: 215,
          flex: 1,
          padding: 10,
          borderRadius: 10,
        },
        style,
      ]}>
      <Text>Why should you invest here?</Text>
    </View>
  );
}

export default function HomeOptions() {
  return (
    <View style={{padding: 20, flexDirection: 'row'}}>
      <HomeOption />
      <HomeOption style={{marginLeft: 15}} />
    </View>
  );
}
