import {StyleProp, Text as RNText, TextStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {COLORS} from '../constants/colors';

export type ITextVariant = 'title' | 'text';
export type IColorVariant =
  | 'onPrimary'
  | 'onPrimaryVariant'
  | 'onSecondary'
  | 'error';

export interface ITextProps {
  variant?: ITextVariant;
  colorVariant?: IColorVariant;
  style?: StyleProp<TextStyle>;
}

export type IGetTextStyle = () => TextStyle;

export function Text({
  children,
  variant,
  colorVariant,
  style,
}: PropsWithChildren<ITextProps>) {
  const getTextStyle: IGetTextStyle = () => {
    let textStyle: TextStyle = {};

    switch (variant) {
      case 'title':
        textStyle = {fontSize: 18, fontWeight: 'bold'};
        break;
      case 'text':
        textStyle = {fontSize: 14, fontWeight: 'normal'};
        break;
      default:
        textStyle = {};
    }

    switch (colorVariant) {
      case 'onPrimary':
        textStyle = {color: COLORS.onPrimary};
        break;
      case 'onPrimaryVariant':
        textStyle = {color: COLORS.onPrimaryVariant};
        break;
      case 'onSecondary':
        textStyle = {color: '#FFF'};
        break;
      case 'error':
        textStyle = {color: COLORS.error};
        break;
      default:
        textStyle = {};
    }

    return textStyle;
  };

  return <RNText style={[getTextStyle(), style]}>{children}</RNText>;
}
