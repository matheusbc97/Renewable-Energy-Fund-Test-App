import {StyleProp, View, ViewStyle} from 'react-native';
import {SvgIcon} from './SvgIcon';

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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text colorVariant="onBackgroundVariant">{label}</Text>
        <SvgIcon name="Info" style={{marginLeft: 3}} />
      </View>
      <Text style={{marginTop: 5}}>{value}</Text>
    </View>
  );
}
