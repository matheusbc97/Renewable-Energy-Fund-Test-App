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
  | 'onBackground'
  | 'onBackgroundVariant'
  | 'onPrimaryVariant'
  | 'onSecondary'
  | 'error';

export interface ITextProps {
  variant?: ITextVariant;
  colorVariant?: IColorVariant;
  style?: StyleProp<TextStyle>;
}

export type IGetTextStyle = () => TextStyle;

function getTextStyle(
  variant: ITextVariant,
  colorVariant: IColorVariant,
): TextStyle {
  let textStyle: TextStyle = {};

  switch (variant) {
    case 'title-big':
      textStyle = {fontSize: 24, fontFamily: 'Sora600'};
      break;
    case 'title':
      textStyle = {fontSize: 18, fontFamily: 'Sora600'};
      break;
    case 'title-small':
      textStyle = {fontSize: 12, fontFamily: 'Sora600'};
      break;
    case 'text':
      textStyle = {fontSize: 14, fontFamily: 'Sora400'};
      break;
    case 'text-small':
      textStyle = {fontSize: 12, fontFamily: 'Sora400'};
      break;
  }

  switch (colorVariant) {
    case 'onBackground':
      textStyle = {...textStyle, color: COLORS.onBackground};
      break;
    case 'onBackgroundVariant':
      textStyle = {...textStyle, color: COLORS.onBackgroundVariant};
      break;
    case 'onSecondary':
      textStyle = {...textStyle, color: '#FFF'};
      break;
    case 'error':
      textStyle = {...textStyle, color: COLORS.error};
      break;
    case 'onPrimaryVariant':
      textStyle = {...textStyle, color: COLORS.onPrimaryVariant};
  }

  return textStyle;
}

export function Text({
  children,
  variant = 'text',
  colorVariant = 'onBackground',
  style,
}: PropsWithChildren<ITextProps>) {
  return (
    <RNText style={[getTextStyle(variant, colorVariant), style]}>
      {children}
    </RNText>
  );
}
