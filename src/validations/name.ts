import * as yup from 'yup';

export const nameValidation = () => yup.string().required('E-mail is required');
