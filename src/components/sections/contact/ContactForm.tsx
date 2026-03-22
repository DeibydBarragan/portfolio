import { useMemo, useRef, useState } from 'react'
import { HiMail } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getContactSchema } from './contactSchema'
import Popover from '@/components/pure/popover/Popover'
import emailjs from '@emailjs/browser'
import { BiLoaderAlt } from 'react-icons/bi'
import Toast from '@/components/pure/toast/Toast'
import { fadeIn } from '@/animations/anim'
import { useLanguage } from '@/context/LanguageContext'

type Props = {}

export default function ContactForm({}: Props) {
  const { language } = useLanguage()
  const contactSchema = useMemo(() => getContactSchema(language), [language])

  const form = useRef<any>('')

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<Message | null>(null)

  const { register, formState: { errors }, handleSubmit, clearErrors } = useForm({
    resolver: yupResolver(contactSchema)
  })

  const onSubmit = async () => {
    try {
      setLoading(true)
      await emailjs.sendForm(
        'service_i8l93pa',
        'template_xph7gfp',
        form.current,
        'ujWGQJntsXHdicI8X'
      )
      setMessage({
        title: language === 'es' ? 'Mensaje enviado' : 'Message sent',
        message: language === 'es' ? 'Tu mensaje ha sido enviado con exito, pronto me comunicare contigo' : 'Your message was sent successfully. I will contact you soon.',
        type: 'success',
      })
    } catch (error) {
      setMessage({
        title: language === 'es' ? 'Error' : 'Error',
        message: language === 'es' ? 'Ha ocurrido un error al enviar el mensaje' : 'An error occurred while sending your message',
        type: 'error',
      })
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <form
      className='flex flex-col gap-4 w-full mt-4'
      onSubmit={handleSubmit(onSubmit)}
      aria-label={language === 'es' ? 'Formulario de contacto' : 'Contact form'}
      ref={form}
    >
      {/**Email */}
      <Popover>
        <motion.input
          type="text"
          aria-label={language === 'es' ? 'Tu correo electronico' : 'Your email'}
          placeholder={language === 'es' ? 'Tu correo electronico' : 'Your email'}
          className='input-text'
          transition={{delay: 0.2}}
          {...fadeIn}
          {...register('email')}
          name='email'
        />
        <Popover.Message show={errors.email?.message} clear={clearErrors} fieldName='email'/>
      </Popover>  
      {/**Subject */}
      <Popover>
        <motion.input
          type="text"
          aria-label={language === 'es' ? 'Asunto' : 'Subject'}
          placeholder={language === 'es' ? 'Asunto' : 'Subject'}
          className='input-text'
          transition={{delay: 0.4}}
          {...fadeIn}
          {...register('subject')}
          name='subject'
        />
        <Popover.Message show={errors.subject?.message} clear={clearErrors} fieldName='subject'/>
      </Popover>  
      {/**Message */}
      <Popover>
        <motion.textarea
          placeholder={language === 'es' ? 'Mensaje' : 'Message'}
          aria-label={language === 'es' ? 'Mensaje' : 'Message'}
          className='input-text'
          transition={{delay: 0.6}}
          {...fadeIn}
          {...register('message')}
          name='message'
        />
        <Popover.Message show={errors.message?.message} clear={clearErrors} fieldName='message'/>
      </Popover>
      {/**Submit */}
      <button
        type='submit'
        className='btn-gradient w-full disabled:opacity-75'
        aria-label={language === 'es' ? 'Enviar mensaje' : 'Send message'}
        disabled={loading}
      >
        {language === 'es' ? 'Enviar mensaje' : 'Send message'}
        {loading 
          ? <BiLoaderAlt className='animate-spin text-xl'/>
          : <HiMail className="text-xl"/>  
        }
      </button>
      <Toast message={message} setMessage={setMessage}/>
    </form>
  )
}