import {FieldValues} from 'react-hook-form';

import {SmartTextInput, ISmartTextInputProps} from '../SmartTextInput';

export function EmailSmartTextInput<T extends FieldValues>({
  label = 'E-mail',
  ...rest
}: ISmartTextInputProps<T>) {
  return <SmartTextInput label={label} {...rest} />;
}
