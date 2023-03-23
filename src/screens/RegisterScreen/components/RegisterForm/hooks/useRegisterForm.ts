import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from '../../../../../validations';

interface IRegisterForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  agreedToTerms: boolean;
}

const schema = yup
  .object({
    email: emailValidation(),
    password: passwordValidation(),
    firstName: nameValidation(),
    lastName: nameValidation(),
    agreedToTerms: yup.boolean().oneOf([true], 'You must agree to the terms'),
  })
  .required();

const defaultValues: IRegisterForm = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  agreedToTerms: false,
};

export default function useRegisterForm() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IRegisterForm>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return {control, handleSubmit, errors};
}
