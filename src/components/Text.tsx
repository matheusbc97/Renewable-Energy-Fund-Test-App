import {StyleProp, Text as RNText, TextStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {COLORS} from '../constants/colors';

export type ITextVariant =
  | 'title'
  | 'text'
  | 'title-small'
  | 'text-small'
  | 'title-big';

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
      case 'title-big':
        textStyle = {fontSize: 24, fontWeight: 'bold'};
        break;
      case 'title-small':
        textStyle = {fontSize: 14, fontWeight: 'bold'};
        break;
      case 'text':
        textStyle = {fontSize: 14, fontWeight: 'normal'};
        break;
      case 'text-small':
        textStyle = {fontSize: 12, fontWeight: 'normal'};
        break;
    }

    switch (colorVariant) {
      case 'onPrimary':
        textStyle = {...textStyle, color: COLORS.onPrimary};
        break;
      case 'onPrimaryVariant':
        textStyle = {...textStyle, color: COLORS.onPrimaryVariant};
        break;
      case 'onSecondary':
        textStyle = {...textStyle, color: '#FFF'};
        break;
      case 'error':
        textStyle = {...textStyle, color: COLORS.error};
        break;
    }

    return textStyle;
  };

  return <RNText style={[getTextStyle(), style]}>{children}</RNText>;
}
