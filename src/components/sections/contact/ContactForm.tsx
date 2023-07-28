import { useRef, useState } from 'react'
import { HiMail } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from './contactSchema'
import Popover from '@/components/pure/popover/Popover'
import emailjs from '@emailjs/browser'
import { BiLoaderAlt } from 'react-icons/bi'
import Toast from '@/components/pure/toast/Toast'
import { fadeIn } from '@/animations/anim'

type Props = {}

export default function ContactForm({}: Props) {

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
        'service_06ucv1i',
        'template_weiezvo',
        form.current,
        'ujWGQJntsXHdicI8X'
      )
      setMessage({
        title: 'Mensaje enviado',
        message: 'Tu mensaje ha sido enviado con éxito, pronto me comunicaré contigo',
        type: 'success',
      })
    } catch (error) {
      setMessage({
        title: 'Error',
        message: 'Ha ocurrido un error al enviar el mensaje',
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
      aria-label='Formulario de contacto'
      ref={form}
    >
      {/**Email */}
      <Popover>
        <motion.input
          type="text"
          aria-label='Tu correo electronico'
          placeholder='Tu correo electronico'
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
          aria-label='Asunto'
          placeholder='Asunto'
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
          placeholder='Mensaje'
          aria-label='Mensaje'
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
        aria-label='Enviar mensaje'
        disabled={loading}
      >
        Enviar mensaje
        {loading 
          ? <BiLoaderAlt className='animate-spin text-xl'/>
          : <HiMail className="text-xl"/>  
        }
      </button>
      <Toast message={message} setMessage={setMessage}/>
    </form>
  )
}