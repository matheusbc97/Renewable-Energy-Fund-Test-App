import {TouchableOpacity, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import {COLORS} from '../constants/colors';
import {Text} from '../components/Text';
import {PropsWithChildren} from 'react';
import ErrorText from './ErrorText';

export interface ICheckBoxInputProps {
  checked: boolean;
  onPress: () => void;
  errorMessage?: string;
}

export default function CheckBoxInput({
  checked,
  onPress,
  children,
  errorMessage,
}: PropsWithChildren<ICheckBoxInputProps>) {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={onPress}>
          {!checked && (
            <Ionicons
              name="square-outline"
              size={24}
              color={COLORS.onBackground}
            />
          )}
          {checked && (
            <Ionicons
              name="checkbox-outline"
              size={24}
              color={COLORS.onBackground}
            />
          )}
        </TouchableOpacity>

        <Text colorVariant="onBackground" style={{flex: 1, marginLeft: 10}}>
          {children}
        </Text>
      </View>

      <ErrorText>{errorMessage}</ErrorText>
    </View>
  );
}
