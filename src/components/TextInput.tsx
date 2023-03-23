import {
  View,
  Text,
  TextInput as RNInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {COLORS} from '../constants/colors';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
}

export function TextInput({
  label,
  placeholder = 'Type here...',
  style,
  errorMessage,
  ...rest
}: TextInputProps) {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{color: '#A0A0A0'}}>{label}</Text>
      <RNInput
        placeholder={placeholder}
        style={[
          {
            backgroundColor: '#F4F4F4',
            paddingVertical: 10,
            paddingHorizontal: 15,
            marginTop: 5,
          },
          style,
        ]}
        {...rest}
      />
      {!!errorMessage && (
        <Text style={{color: COLORS.error, textAlign: 'right', marginTop: 3}}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
}
