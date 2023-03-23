import {PropsWithChildren} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Text} from './Text';

interface IErrorTextProps {
  style?: StyleProp<TextStyle>;
}

export default function ErrorText({
  children,
}: PropsWithChildren<IErrorTextProps>) {
  return (
    <Text colorVariant="error" style={{textAlign: 'right', marginTop: 3}}>
      {children}
    </Text>
  );
}
