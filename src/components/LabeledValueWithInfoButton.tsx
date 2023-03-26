import {StyleProp, View, ViewStyle} from 'react-native';

import {Text} from './Text';

interface ILabeledValueWithInfoButtonProps {
  label: string;
  value: string;
  style?: StyleProp<ViewStyle>;
}

export function LabeledValueWithInfoButton({
  label,
  value,
  style,
}: ILabeledValueWithInfoButtonProps) {
  return (
    <View style={style}>
      <Text colorVariant="onBackgroundVariant">{label}</Text>
      <Text>{value}</Text>
    </View>
  );
}
