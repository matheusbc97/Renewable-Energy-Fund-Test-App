import {TouchableOpacity, Text, ViewStyle, StyleProp} from 'react-native';
import {COLORS} from '../constants/colors';

type IButtonVariant = 'primary' | 'secondary' | 'primary-variant';

export interface IButtonProps {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  variant?: IButtonVariant;
  leftComponent?: React.ReactNode;
}

function getButtonBackgroundColor(variant: IButtonVariant) {
  switch (variant) {
    case 'primary':
      return COLORS.primary;
    case 'secondary':
      return COLORS.secondary;
    case 'primary-variant':
      return COLORS.primaryVariant;
  }
}

function getButtonTextColor(variant: IButtonVariant) {
  switch (variant) {
    case 'primary':
      return COLORS.onPrimary;
    case 'secondary':
      return COLORS.onSecondary;
    case 'primary-variant':
      return COLORS.onPrimaryVariant;
  }
}

export function Button({
  onPress,
  label,
  style,
  variant = 'primary',
  leftComponent,
}: IButtonProps) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: getButtonBackgroundColor(variant),
          padding: 16,
          alignItems: 'center',
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'center',
        },
        style,
      ]}
      onPress={onPress}>
      {leftComponent}
      <Text style={{color: getButtonTextColor(variant), fontWeight: 'bold'}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
