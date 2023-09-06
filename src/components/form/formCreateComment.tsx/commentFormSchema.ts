import * as yup from 'yup';

export const commentFormSchema = yup.object().shape({

  text: yup.string().required('Campo Obrigatorio'),
});
