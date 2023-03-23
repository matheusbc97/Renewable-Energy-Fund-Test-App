import {FieldValues} from 'react-hook-form';

import {SmartTextInput, ISmartTextInputProps} from '../SmartTextInput';

export function PasswordSmartTextInput<T extends FieldValues>({
  label = 'Password',
  placeholder = 'Minimum 8 characters',
  secureTextEntry = true,
  ...rest
}: ISmartTextInputProps<T>) {
  return (
    <SmartTextInput
      label={label}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      {...rest}
    />
  );
}
