import React from 'react'
import { AiFillRightCircle } from 'react-icons/ai'
import Section from '../Section'
import { motion } from 'framer-motion';
import BgShapes from '@/components/pure/bgShapes/BgShapes';

type Props = {}

export default function Education({}: Props) {
  const liAnimation = {
    initial: {
      opacity: 0,
      x: -10
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
  }

  return (
    <Section
      className='sm:w-10/12  md:w-8/12 lg:w-6/12 2xl:w-5/12'
      id='education'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
    >
      <BgShapes
        className='h-56 w-56 bottom-20 left-0 bg-gradient-to-tr from-red-500 to-indigo-700'
      />
      <BgShapes
        className='h-72 w-72 top-30 right-0 bg-orange-500'
      />
      <BgShapes
        className='h-72 w-72 top-0 left-0 bg-sky-500'
      />
      <h2>Educación</h2>
        <div className='relative flex flex-col gap-3 rounded-lg bg-white/70 dark:bg-zinc-950/70 p-6'>
          <motion.div
            className='flex items-center gap-3'
            transition={{delay: 0.3}}
            {...liAnimation}
          >
            <AiFillRightCircle className="text-3xl text-indigo-700"/>
            <p>
              Técnico en programación de software en formación(3er trimestre)
              <br/>Servicio Nacional de Aprendizaje (SENA)
              <br/>En proceso de certificación
            </p>
          </motion.div>
          <hr/>
          <motion.div
            className='flex items-center gap-3'
            transition={{delay: 0.6}}
            {...liAnimation}
          >
            <AiFillRightCircle className="text-3xl text-indigo-700"/>
            <p>
              Bachiller técnico con énfasis en gestión de proyectos culturales
              <br/>Colegio El Porvenir IED (Bogotá D.C)
              <br/>2020
            </p>
          </motion.div>
        </div>
      <h2>Experiencia</h2>
      <div className='relative flex flex-col gap-3 divide-y rounded-lg bg-white/70 dark:bg-zinc-950/70 p-6'>
          <motion.div
            className='flex items-center gap-3'
            transition={{delay: 0.9}}
            {...liAnimation}
          >
            <AiFillRightCircle className="text-3xl text-indigo-700"/>
            <p>
              Técnico en programación de software en formación(3er trimestre)
              <br/>Servicio Nacional de Aprendizaje (SENA)
              <br/>En proceso de certificación
            </p>
          </motion.div>
        </div>
    </Section>
  )
}