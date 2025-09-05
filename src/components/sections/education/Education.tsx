import React from 'react'
import { AiFillRightCircle } from 'react-icons/ai'
import Section from '../Section'
import { motion } from 'framer-motion';
import BgShapes from '@/components/pure/bgShapes/BgShapes';
import EducationCard from '@/components/pure/educationCard/EducationCard';
import { fadeIn } from '@/animations/anim';
import Image from 'next/image';
import Link from 'next/link';

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
          <br/>- En curso (5 semestres completados)
          <br/>- 2023 - Actualidad
        </p>
        <p>
          Actualmente curso mi carrera universitaria en Ingeniería de Sistemas y Computación en la Universidad Nacional de Colombia. En estos 5 semestres he fortalecido mis bases en programación, algoritmos, estructuras de datos, bases de datos, y desarrollo de software. He profundizado en tecnologías como Java, Typescript, Python, SQL, y metodologías de desarrollo ágil, complementando mi formación técnica previa con una sólida base teórica y práctica.
        </p>
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
      <h2>Experiencia</h2>
      <EducationCard
        delay={1.5}
      >
        <span className='font-semibold'>
          Aula STEAM - Universidad Nacional de Colombia - 10 meses (Tiempo parcial)
        </span>
        <p>
          Durante 3 semestres participé activamente en el Aula STEAM de la Universidad Nacional de Colombia, realizando proyectos de desarrollo y mejora que impactaron positivamente el funcionamiento del aula.
        </p>
        <p>
          <strong>Proyectos desarrollados:</strong>
          <br/>• Automatización de estadísticas del Aula STEAM mediante Power BI
          <br/>• Diseño y desarrollo del sistema de solicitud de equipos y asesorías del aula
          <br/>• Implementación de un chat inteligente para acceso a la información y orientación dentro del aula
        </p>
        <p>
          <strong>Participación activa:</strong>
          <br/>• Capacitaciones relacionadas con programación y herramientas digitales
          <br/>• Apoyo en asesorías de programación a otros miembros de la comunidad
          <br/>• Obtención de insignia digital como <Link 
            href="https://www.acreditta.com/credential/c8b76042-b39f-40ed-b173-c0066512195f?utm_source=copy&resource_type=badge&resource=c8b76042-b39f-40ed-b173-c0066512195f" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
          >
            Instructor de Python
          </Link> expedida por la Universidad Nacional de Colombia
        </p>
        <div className="flex justify-center my-4">
          <Link
            href="https://www.acreditta.com/credential/c8b76042-b39f-40ed-b173-c0066512195f?utm_source=copy&resource_type=badge&resource=c8b76042-b39f-40ed-b173-c0066512195f"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Image
              src="/images/credentials/python.webp"
              alt="Insignia digital de Instructor de Python - Universidad Nacional de Colombia"
              width={300}
              height={200}
              className="rounded-lg shadow-md border dark:border-gray-700"
            />
          </Link>
        </div>
        <p>
          Esta experiencia me permitió aplicar mis conocimientos técnicos en un entorno real, trabajar en equipo, y contribuir al desarrollo de herramientas que mejoraron la gestión y funcionamiento del aula, mientras compartía conocimientos con la comunidad universitaria. Mi rol como instructor certificado de Python me permitió guiar y formar a otros estudiantes en este lenguaje de programación.
        </p>
      </EducationCard>
      <EducationCard
        delay={1.8}
      >
        <span className='font-semibold'>
          Desarrollo de proyectos de software  y académicos - 6 meses
        </span>
        <p>
          En mi tiempo libre, he estado enfocado en desarrollar proyectos personales de diferentes tipos para
          aprender tecnologías mejorando mis habilidades y prácticas de desarrollo. He trabajado con herramientas como NextJS, React
          , Tailwind y diferentes librerías de componentes del lado del frontend. Adicionalmente he trabajado
          desarrollando y diseñando APIs con tecnologías como Spring Boot, Express y Laravel, e implementando
          bases de datos relacionales y no relacionales con MySQL, MongoDB y Firebase.
          Me apasiona seguir aprendiendo y mejorando mis habilidades
          técnicas, y estos proyectos me han permitido hacer precisamente eso, mientras 
          desarrollo soluciones creativas y prácticas.
        </p>
      </EducationCard>
    </Section>
  )
}