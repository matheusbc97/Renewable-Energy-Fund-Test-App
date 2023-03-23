import {PropsWithChildren} from 'react';
import {StyleProp, TouchableWithoutFeedback, ViewStyle} from 'react-native';

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
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={[{textDecorationLine: 'underline'}, style]}>{children}</Text>
    </TouchableWithoutFeedback>
  );
}
