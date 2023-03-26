import {
  View,
  TextInput as RNInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {COLORS} from '../constants/colors';

import ErrorText from './ErrorText';
import {Text} from './Text';

export interface ITextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  rightComponent?: React.ReactNode;
}

export function TextInput({
  label,
  placeholder = 'Type here...',
  style,
  errorMessage,
  rightComponent,
  ...rest
}: ITextInputProps) {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{color: COLORS.onBackgroundVariant}}>{label}</Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.info,
          marginTop: 5,
          alignItems: 'center',
          borderRadius: 4,
        }}>
        <RNInput
          placeholder={placeholder}
          style={[
            {
              paddingVertical: 10,
              paddingLeft: 15,
              paddingRight: rightComponent ? 0 : 15,
              color: COLORS.onBackground,
              flex: 1,
            },
            style,
          ]}
          {...rest}
        />
        {rightComponent}
      </View>
      {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </View>
  );
}
