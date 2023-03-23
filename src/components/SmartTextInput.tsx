import {TextInput, TextInputProps} from './TextInput';
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

export interface ISmartTextInputProps<T extends FieldValues>
  extends TextInputProps {
  control?: Control<T, any> | undefined;
  name: Path<T>;
  rules?:
    | Omit<
        RegisterOptions<T, Path<T>>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
}

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
