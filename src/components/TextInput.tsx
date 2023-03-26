import {
  View,
  TextInput as RNInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {COLORS} from '../constants/colors';

import ErrorText from './ErrorText';
import {Text} from './Text';

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
      <Text style={{color: COLORS.onBackgroundVariant}}>{label}</Text>
      <RNInput
        placeholder={placeholder}
        style={[
          {
            backgroundColor: COLORS.info,
            paddingVertical: 10,
            paddingHorizontal: 15,
            marginTop: 5,
            color: COLORS.onBackground,
          },
          style,
        ]}
        {...rest}
      />
      {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </View>
  );
}
