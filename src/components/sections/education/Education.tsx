import React from 'react'
import Section from '../Section'
import BgShapes from '@/components/pure/bgShapes/BgShapes';
import EducationCard from '@/components/pure/educationCard/EducationCard';
import { fadeIn } from '@/animations/anim';
import { useLanguage } from '@/context/LanguageContext';

type Props = {}

export default function Education({}: Props) {
  const { language } = useLanguage()

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
      <h2 className="mt-4 md:mt-24">{language === 'es' ? 'Educacion' : 'Education'}</h2>
      <EducationCard delay={0.3}>
        <span className='font-semibold'>
          {language === 'es' ? 'Ingenieria de Sistemas y Computacion' : 'Systems and Computer Engineering'}
        </span>
        <p>
          {language === 'es' ? 'Universidad Nacional de Colombia' : 'National University of Colombia'}
          <br/>- {language === 'es' ? 'En curso (6 semestres completados)' : 'In progress (6 semesters completed)'}
          <br/>- {language === 'es' ? '2023 - Actualidad' : '2023 - Present'}
        </p>

        <p>
          {language === 'es'
            ? 'Actualmente curso mi carrera universitaria en Ingenieria de Sistemas y Computacion en la Universidad Nacional de Colombia. En estos semestres he fortalecido mis bases en programacion, algoritmos, estructuras de datos, bases de datos y desarrollo de software. He profundizado en tecnologias como Java, TypeScript, Python y SQL, junto con metodologias de desarrollo agil, complementando mi formacion tecnica previa con una base teorica y practica solida.'
            : 'I am currently pursuing my Systems and Computer Engineering degree at the National University of Colombia. During these semesters I have strengthened my foundations in programming, algorithms, data structures, databases, and software development. I have deepened my knowledge of technologies such as Java, TypeScript, Python, and SQL, together with agile development methodologies, complementing my previous technical background with a strong theoretical and practical base.'}
        </p>
        <div className="w-full my-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">{language === 'es' ? 'Progreso de carrera' : 'Degree progress'}</span>
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
          {language === 'es' ? 'Tecnico en programacion de software' : 'Software Programming Technician'}
        </span>
        <p>
          {language === 'es' ? 'Servicio Nacional de Aprendizaje (SENA)' : 'National Learning Service (SENA)'}
          <br/>2022 - 2023 ({language === 'es' ? '9 meses' : '9 months'})
        </p>
        <p>
          {language === 'es'
            ? 'En mi tecnico en programacion de software aprendi los fundamentos del desarrollo web frontend y backend con HTML, CSS, JS, PHP, MySQL y desarrollo de proyectos de software realistas.'
            : 'During my software programming technician training, I learned the foundations of frontend and backend web development using HTML, CSS, JS, PHP, MySQL, and realistic software project development.'}
        </p>
      </EducationCard>
      <EducationCard delay={0.9}>
        <span className='font-semibold'>
          {language === 'es' ? 'Curso de larga duracion de desarrollo Backend intermedio' : 'Intermediate Backend Development Long Program'}
        </span>
        <p>
          {language === 'es' ? 'Universidad Distrital Francisco Jose de Caldas (Todos a la U)' : 'Universidad Distrital Francisco Jose de Caldas (Todos a la U)'}
          <br/>- 2023 ({language === 'es' ? '5 meses' : '5 months'})
          <br/>- {language === 'es' ? 'En curso' : 'In progress'}
        </p>
        <p>
          {language === 'es'
            ? 'Este curso ha sido una oportunidad para aprender mas acerca de desarrollo backend, disenar arquitectura y desarrollar APIs con tecnologias como Spring Boot (Java) y Express (NodeJs), ademas de disenar e implementar bases de datos tanto relacionales como no relacionales.'
            : 'This program has been a great opportunity to learn more about backend development by designing architecture and building APIs with technologies such as Spring Boot (Java) and Express (NodeJs), as well as designing and implementing both relational and non-relational databases.'}
        </p>
      </EducationCard>
      <EducationCard delay={1.2}>
        <span className='font-semibold'>
          {language === 'es' ? 'Bachiller tecnico con enfasis en gestion de proyectos culturales' : 'Technical High School Degree with focus on cultural project management'}
        </span>
        <p>
          {language === 'es' ? 'Colegio El Porvenir IED (Bogota D.C)' : 'El Porvenir IED School (Bogota D.C)'}
          <br/>2020
        </p>
      </EducationCard>
    </Section>
  )
}