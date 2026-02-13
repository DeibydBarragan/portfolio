import React from 'react'
import Section from '../Section'
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
          Ingeniería de Sistemas y Computación
        </span>
        <p>
          Universidad Nacional de Colombia
          <br/>- En curso (6 semestres completados)
          <br/>- 2023 - Actualidad
        </p>

        <p>
          Actualmente curso mi carrera universitaria en Ingeniería de Sistemas y Computación en la Universidad Nacional de Colombia. En estos 5 semestres he fortalecido mis bases en programación, algoritmos, estructuras de datos, bases de datos, y desarrollo de software. He profundizado en tecnologías como Java, Typescript, Python, SQL, y metodologías de desarrollo ágil, complementando mi formación técnica previa con una sólida base teórica y práctica.
        </p>
        <div className="w-full my-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Progreso de carrera</span>
            <span className="text-sm font-medium">61.2%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: '61.2%' }}
            />
          </div>
        </div>
      </EducationCard>
      <EducationCard delay={0.6}>
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
      <EducationCard delay={0.9}>
        <span className='font-semibold'>
          Curso de larga duración de desarrollo Backend intermedio
        </span>
        <p>
          Universidad Distrital Francisco José de Caldas (Todos a la U)
          <br/>- 2023 (5 meses)
          <br/>- En curso
        </p>
        <p>
          Este curso ha sido una oportunidad para aprender más acerca de desarollo backend diseñando
          arquitectura y desarrollando APIs con tecnologías como Spring Boot (Java) y Express (NodeJs)
          además de diseñar e implementar bases de datos tanto relacionales como no relacionales.
        </p>
      </EducationCard>
      <EducationCard delay={1.2}>
        <span className='font-semibold'>
          Bachiller técnico con énfasis en gestión de proyectos culturales
        </span>
        <p>
          Colegio El Porvenir IED (Bogotá D.C)
          <br/>2020
        </p>
      </EducationCard>
    </Section>
  )
}