import {FieldValues} from 'react-hook-form';

import {SmartTextInput, ISmartTextInputProps} from '../SmartTextInput';

export function EmailSmartTextInput<T extends FieldValues>({
  label = 'E-mail',
  autoCapitalize = 'none',
  textContentType = 'emailAddress',
  autoComplete = 'email',
  ...rest
}: ISmartTextInputProps<T>) {
  return (
    <SmartTextInput
      label={label}
      autoCapitalize={autoCapitalize}
      textContentType={textContentType}
      autoComplete={autoComplete}
      {...rest}
    />
  );
}
