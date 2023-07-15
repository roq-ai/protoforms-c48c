import * as yup from 'yup';

export const dataEntryValidationSchema = yup.object().shape({
  content: yup.string().required(),
  table_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
