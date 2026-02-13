import React from 'react'
import Section from '../Section'
import { motion } from 'framer-motion';
import BgShapes from '@/components/pure/bgShapes/BgShapes';
import EducationCard from '@/components/pure/educationCard/EducationCard';
import { fadeIn } from '@/animations/anim';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

export default function Experience({}: Props) {
  
  return (
    <Section
      className='sm:w-10/12  md:w-8/12 lg:w-6/12 2xl:w-5/12 gap-8'
      id='experience'
      transition={{ delay: 0.3 }}
      {...fadeIn}
    >
      <BgShapes
        className='h-56 w-56 bottom-20 left-0 bg-gradient-to-tr from-purple-500 to-pink-700'
      />
      <BgShapes
        className='h-72 w-72 top-30 right-0 bg-green-500'
      />
      <BgShapes
        className='h-72 w-72 top-0 left-0 bg-cyan-500 hidden md:block'
      />
      <h2 className="mt-4 md:mt-24">Experiencia</h2>
      <EducationCard
        delay={0.3}
      >
        <span className='font-semibold'>
          Aula STEAM - Universidad Nacional de Colombia - 10 meses (8 horas por semana)
        </span>
        <p>
          Durante 4 semestres participé activamente en el Aula STEAM de la Universidad Nacional de Colombia, realizando proyectos de desarrollo y mejora que impactaron positivamente el funcionamiento del aula.
        </p>
        <p>
          <strong>Proyectos desarrollados:</strong>
          <br/>• Automatización de estadísticas del Aula STEAM mediante Power BI
          <br/>• Diseño y desarrollo del sistema de solicitud de equipos y asesorías del aula
          <br/>• Implementación de un chat inteligente para acceso a la información y orientación dentro del aula
          <br/>• Desarrollo de un sistema para la conducción de un carro AWS Deepracer usando tecnologías web y linux
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
          </Link> e <Link 
            href="https://acreditta.com/credential/bd039838-d16a-4f72-b762-de166f0ed7c5?utm_source=copy&resource_type=badge&resource=bd039838-d16a-4f72-b762-de166f0ed7c5" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
          >
            Instructor en IA para la vida
          </Link> expedidas por la Universidad Nacional de Colombia
        </p>
        <div className="flex justify-center my-4 gap-6">
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
          <Link
            href="https://acreditta.com/credential/bd039838-d16a-4f72-b762-de166f0ed7c5?utm_source=copy&resource_type=badge&resource=bd039838-d16a-4f72-b762-de166f0ed7c5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Image
              src="/images/credentials/ia.webp"
              alt="Insignia digital de Instructor en IA para la vida - Universidad Nacional de Colombia"
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
        delay={0.6}
      >
        <span className='font-semibold'>
          Desarrollo de plataforma web para proyectos de ingeniería civil - 4 meses (10 horas por semana)
        </span>
        <p>
          Como estudiante auxiliar participé en el desarrollo de la plataforma <Link href="https://duscun.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors">DUSCUN</Link>, una plataforma web diseñada para gestionar y mostrar proyectos de ingeniería civil desarrollados por estudiantes de la Universidad Nacional de Colombia. Mi rol principal fue el desarrollo frontend utilizando NextJS, Tailwind CSS y React, trabajando en colaboración con un equipo multidisciplinario para crear una experiencia de usuario intuitiva y atractiva. En esta plataforma también desarrollé junto a mi compañera, una calculadora para estimar la conductividad de la solución de poros del concreto.
        </p>
      </EducationCard>
      <EducationCard
        delay={0.9}
      >
        <span className='font-semibold'>
          Desarrollo de proyectos de software y académicos - 6 meses
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
