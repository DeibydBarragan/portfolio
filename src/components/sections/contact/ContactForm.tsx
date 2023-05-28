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
    >
      {/**Email */}
      <motion.input
        type="text"
        placeholder='Tu correo electronico'
        className='input-text'
        transition={{delay: 0.2}}
        {...inputAnimation}
      />
      {/**Subject */}
      <motion.input
        type="text"
        placeholder='Asunto'
        className='input-text'
        transition={{delay: 0.4}}
        {...inputAnimation}
      />
      {/**Mensaje */}
      <motion.textarea
        placeholder='Mensaje'
        className='input-text'
        transition={{delay: 0.6}}
        {...inputAnimation}
      />
      {/**Submit */}
      <button
        type='submit'
        className='btn w-full bg-gradient-to-r from-indigo-700 to-orange-500'
      >
        Enviar mensaje
        <HiMail className="text-xl"/>
      </button>
    </form>
  )
}