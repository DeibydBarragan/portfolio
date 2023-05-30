import React from 'react'
import { HiMail } from 'react-icons/hi'
import { motion } from 'framer-motion';

type Props = {}

export default function ContactForm({}: Props) {
  const inputAnimation = {
    initial: {
      opacity: 0,
      y: 10
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleSubmit}
      aria-label='Formulario de contacto'
    >
      {/**Email */}
      <motion.input
        type="text"
        aria-label='Tu correo electronico'
        placeholder='Tu correo electronico'
        className='input-text'
        transition={{delay: 0.2}}
        {...inputAnimation}
      />
      {/**Subject */}
      <motion.input
        type="text"
        aria-label='Asunto'
        placeholder='Asunto'
        className='input-text'
        transition={{delay: 0.4}}
        {...inputAnimation}
      />
      {/**Mensaje */}
      <motion.textarea
        placeholder='Mensaje'
        aria-label='Mensaje'
        className='input-text'
        transition={{delay: 0.6}}
        {...inputAnimation}
      />
      {/**Submit */}
      <button
        type='submit'
        className='btn-gradient w-full'
        aria-label='Enviar mensaje'
      >
        Enviar mensaje
        <HiMail className="text-xl"/>
      </button>
    </form>
  )
}