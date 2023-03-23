import * as yup from 'yup';

export const emailValidation = () =>
  yup.string().email('Invalid e-mail').required('E-mail is required');
