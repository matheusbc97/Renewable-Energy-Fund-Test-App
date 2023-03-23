import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ILoginForm {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email('Invalid e-mail').required('E-mail is required'),
    password: yup.string().min(8).required('Password is required'),
  })
  .required();

export default function useLoginForm() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ILoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return {control, handleSubmit, errors};
}
