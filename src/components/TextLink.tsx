import {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleProp, ViewStyle} from 'react-native';

import {Text} from './Text';

export interface ITextLinkProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export function TextLink({
  onPress,
  style,
  children,
}: PropsWithChildren<ITextLinkProps>) {
  return (
    <TouchableOpacity onPress={onPress} style={[{marginBottom: -2.5}, style]}>
      <Text style={[{textDecorationLine: 'underline'}]}>{children}</Text>
    </TouchableOpacity>
  );
}
