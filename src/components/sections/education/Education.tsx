import React from 'react'
import { AiFillRightCircle } from 'react-icons/ai'
import Section from '../Section'
import { motion } from 'framer-motion';
import BgShapes from '@/components/pure/bgShapes/BgShapes';
import EducationCard from '@/components/pure/educationCard/EducationCard';
import { fadeIn } from '@/animations/anim';

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
      className='sm:w-10/12  md:w-8/12 lg:w-6/12 2xl:w-5/12 gap-8'
      id='education'
      transition={{ delay: 0.3 }}
      {...fadeIn}
    >
      <BgShapes
        className='h-56 w-56 bottom-20 left-0 bg-gradient-to-tr from-red-500 to-indigo-700'
      />
      <BgShapes
        className='h-72 w-72 top-30 right-0 bg-orange-500'
      />
      <BgShapes
        className='h-72 w-72 top-0 left-0 bg-sky-500 hidden md:block'
      />
      <h2 className="mt-4 md:mt-24">Educación</h2>
      <EducationCard delay={0.3}>
        <span className='font-semibold'>
          Técnico en programación de software
        </span>
        <p>
          Servicio Nacional de Aprendizaje (SENA)
          <br/>- En proceso de certificación
          <br/>- 2022- 2023 (9 meses)
        </p>
        <p>
          En mi técnico en programación de software aprendí los fundamentos del desarrollo web frontend y backend con HTML, CSS, JS, PHP, MySQL y desarollo de proyectos de software realistas.
        </p>
      </EducationCard>
      <EducationCard delay={0.6}>
        <span className='font-semibold'>
          Curso de larga duración de desarrollo Backend intermedio
        </span>
        <p>
          Universidad Distrital Francisco José de Caldas (Todos a la U)
          <br/>- 2023 (5 meses)
          <br/>- En curso
        </p>
        <p>
          Este curso ha sido una oportunidad para aprender más acerca de desarollo backend desarrollando APIS con tecnologías como Spring Boot (Java) y Express (NodeJs)
        </p>
      </EducationCard>
      <EducationCard delay={0.6}>
        <span className='font-semibold'>
          Bachiller técnico con énfasis en gestión de proyectos culturales
        </span>
        <p>
          Colegio El Porvenir IED (Bogotá D.C)
          <br/>2020
        </p>
      </EducationCard>
      <h2>Experiencia</h2>
      <EducationCard
        delay={0.9}
      >
        <span className='font-semibold'>
          Desarrollo de proyectos de software personales - 5 meses
        </span>
        <p>
          En mi tiempo libre, he estado enfocado en desarrollar proyectos personales para 
          aprender diferentes tecnologías. He trabajado con herramientas como NextJS, React
          , Tailwind y Firebase. Me apasiona seguir aprendiendo y mejorando mis habilidades 
          técnicas, y estos proyectos me han permitido hacer precisamente eso, mientras 
          desarrollo soluciones creativas y prácticas.
        </p>
      </EducationCard>
    </Section>
  )
}