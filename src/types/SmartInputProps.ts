import {Control, FieldValues, Path, RegisterOptions} from 'react-hook-form';

export interface ISmartInputProps<T extends FieldValues> {
  control?: Control<T, any> | undefined;
  name: Path<T>;
  rules?:
    | Omit<
        RegisterOptions<T, Path<T>>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
}
