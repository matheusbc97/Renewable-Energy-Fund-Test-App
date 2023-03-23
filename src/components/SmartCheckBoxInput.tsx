import {PropsWithChildren} from 'react';
import {Controller, FieldValues} from 'react-hook-form';
import {ISmartInputProps} from '../types';
import CheckBoxInput, {ICheckBoxInputProps} from './CheckBoxInput';

export interface ISmartCheckBoxInputProps<T extends FieldValues>
  extends ISmartInputProps<T>,
    Omit<ICheckBoxInputProps, 'checked' | 'onPress'> {}

export function SmartCheckBoxInput<T extends FieldValues>({
  control,
  name,
  rules,
  children,
  errorMessage,
}: PropsWithChildren<ISmartCheckBoxInputProps<T>>) {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({field: {onChange, value}}) => (
        <CheckBoxInput
          checked={value}
          onPress={() => onChange(!value)}
          errorMessage={errorMessage}>
          {children}
        </CheckBoxInput>
      )}
      name={name}
    />
  );
}
