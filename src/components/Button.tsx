import {TouchableOpacity, Text, ViewStyle, StyleProp} from 'react-native';

export interface IButtonProps {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
}

export function Button({onPress, label, style}: IButtonProps) {
  return (
    <TouchableOpacity
      style={[
        {backgroundColor: '#770FDF', padding: 16, alignItems: 'center'},
        style,
      ]}
      onPress={onPress}>
      <Text style={{color: '#FFF', fontWeight: 'bold'}}>{label}</Text>
    </TouchableOpacity>
  );
}
