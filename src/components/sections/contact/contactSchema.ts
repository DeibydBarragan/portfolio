import * as yup from 'yup'
import { Language } from '@/context/LanguageContext'

export const getContactSchema = (language: Language) =>
  yup.object().shape({
    email: yup
      .string()
      .email(language === 'es' ? 'Por favor ingresa un correo valido' : 'Please enter a valid email')
      .required(language === 'es' ? 'Por favor ingresa tu correo electronico' : 'Please enter your email'),
    subject: yup
      .string()
      .required(language === 'es' ? 'Por favor ingresa un asunto' : 'Please enter a subject'),
    message: yup
      .string()
      .required(language === 'es' ? 'Por favor ingresa tu mensaje' : 'Please enter your message')
  })