import {TextInput, TextInputProps} from './TextInput';
import {Controller, FieldValues} from 'react-hook-form';
import {ISmartInputProps} from '../types';

export interface ISmartTextInputProps<T extends FieldValues>
  extends TextInputProps,
    ISmartInputProps<T> {}

export function SmartTextInput<T extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: ISmartTextInputProps<T>) {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          {...rest}
        />
      )}
      name={name}
    />
  );
}
