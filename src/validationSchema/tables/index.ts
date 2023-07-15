import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  name: yup.string().required(),
  client_id: yup.string().nullable(),
});
