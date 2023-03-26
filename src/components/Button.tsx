import {TouchableOpacity, Text, ViewStyle, StyleProp} from 'react-native';
import {COLORS} from '../constants/colors';

type IButtonVariant = 'primary' | 'secondary';

export interface IButtonProps {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  variant?: IButtonVariant;
}

function getButtonBackgroundColor(variant: IButtonVariant) {
  console.log(variant);
  switch (variant) {
    case 'primary':
      return COLORS.primary;
    case 'secondary':
      return COLORS.secondary;
  }
}

function getButtonTextColor(variant: IButtonVariant) {
  switch (variant) {
    case 'primary':
      return COLORS.onPrimary;
    case 'secondary':
      return COLORS.onSecondary;
  }
}

export function Button({
  onPress,
  label,
  style,
  variant = 'primary',
}: IButtonProps) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: getButtonBackgroundColor(variant),
          padding: 16,
          alignItems: 'center',
          borderRadius: 4,
        },
        style,
      ]}
      onPress={onPress}>
      <Text style={{color: getButtonTextColor(variant), fontWeight: 'bold'}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
