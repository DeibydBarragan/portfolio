import * as yup from 'yup'

export const contactSchema = yup.object().shape({
  email: yup
    .string()
    .email('Por favor ingresa un correo válido')
    .required('Por favor ingresa tu correo electrónico'),
  subject: yup
    .string()
    .required('Por favor ingresa un asunto'),
  message: yup
    .string()
    .required('Por favor ingresa tu mensaje')
})