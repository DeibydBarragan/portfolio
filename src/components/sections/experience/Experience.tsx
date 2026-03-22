import React from 'react'
import Section from '../Section'
import { motion } from 'framer-motion';
import BgShapes from '@/components/pure/bgShapes/BgShapes';
import EducationCard from '@/components/pure/educationCard/EducationCard';
import { fadeIn } from '@/animations/anim';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

type Props = {}

export default function Experience({}: Props) {
  const { language } = useLanguage()
  
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
      <h2 className="mt-4 md:mt-24">{language === 'es' ? 'Experiencia' : 'Experience'}</h2>
      <EducationCard
        delay={0.3}
      >
        <span className='font-semibold'>
          {language === 'es'
            ? 'Aula STEAM - Universidad Nacional de Colombia - 10 meses (8 horas por semana)'
            : 'STEAM Classroom - National University of Colombia - 10 months (8 hours per week)'}
        </span>
        <p>
          {language === 'es'
            ? 'Durante 4 semestres participe activamente en el Aula STEAM de la Universidad Nacional de Colombia, realizando proyectos de desarrollo y mejora que impactaron positivamente el funcionamiento del aula.'
            : 'During four semesters I actively participated in the STEAM Classroom at the National University of Colombia, delivering development and improvement projects that had a positive impact on classroom operations.'}
        </p>
        <p>
          <strong>{language === 'es' ? 'Proyectos desarrollados:' : 'Projects delivered:'}</strong>
          <br/>• {language === 'es' ? 'Automatizacion de estadisticas del Aula STEAM mediante Power BI' : 'Automation of STEAM Classroom statistics with Power BI'}
          <br/>• {language === 'es' ? 'Diseno y desarrollo del sistema de solicitud de equipos y asesorias del aula' : 'Design and development of the classroom equipment and mentoring request system'}
          <br/>• {language === 'es' ? 'Implementacion de un chat inteligente para acceso a la informacion y orientacion dentro del aula' : 'Implementation of an intelligent chat assistant for information access and orientation inside the classroom'}
          <br/>• {language === 'es' ? 'Desarrollo de un sistema para la conduccion de un carro AWS Deepracer usando tecnologias web y Linux' : 'Development of a control system for an AWS DeepRacer car using web technologies and Linux'}
        </p>
        <p>
          <strong>{language === 'es' ? 'Participacion activa:' : 'Active participation:'}</strong>
          <br/>• {language === 'es' ? 'Capacitaciones relacionadas con programacion y herramientas digitales' : 'Training activities on programming and digital tools'}
          <br/>• {language === 'es' ? 'Apoyo en asesorias de programacion a otros miembros de la comunidad' : 'Programming mentoring support for other community members'}
          <br/>• {language === 'es' ? 'Obtencion de insignia digital como ' : 'Earned digital badges as '}
          <Link 
            href="https://www.acreditta.com/credential/c8b76042-b39f-40ed-b173-c0066512195f?utm_source=copy&resource_type=badge&resource=c8b76042-b39f-40ed-b173-c0066512195f" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
          >
            {language === 'es' ? 'Instructor de Python' : 'Python Instructor'}
          </Link> {language === 'es' ? 'e' : 'and'} <Link 
            href="https://acreditta.com/credential/bd039838-d16a-4f72-b762-de166f0ed7c5?utm_source=copy&resource_type=badge&resource=bd039838-d16a-4f72-b762-de166f0ed7c5" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
          >
            {language === 'es' ? 'Instructor en IA para la vida' : 'AI for Life Instructor'}
          </Link> {language === 'es' ? 'expedidas por la Universidad Nacional de Colombia' : 'issued by the National University of Colombia'}
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
              alt={language === 'es' ? 'Insignia digital de Instructor de Python - Universidad Nacional de Colombia' : 'Python Instructor digital badge - National University of Colombia'}
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
              alt={language === 'es' ? 'Insignia digital de Instructor en IA para la vida - Universidad Nacional de Colombia' : 'AI for Life Instructor digital badge - National University of Colombia'}
              width={300}
              height={200}
              className="rounded-lg shadow-md border dark:border-gray-700"
            />
          </Link>
        </div>
        <p>
          {language === 'es'
            ? 'Esta experiencia me permitio aplicar mis conocimientos tecnicos en un entorno real, trabajar en equipo y contribuir al desarrollo de herramientas que mejoraron la gestion y funcionamiento del aula, mientras compartia conocimientos con la comunidad universitaria. Mi rol como instructor certificado de Python me permitio guiar y formar a otros estudiantes en este lenguaje de programacion.'
            : 'This experience allowed me to apply my technical knowledge in a real environment, work collaboratively, and contribute to tools that improved classroom management and operations while sharing knowledge with the university community. My role as a certified Python instructor allowed me to guide and train other students in this programming language.'}
        </p>
      </EducationCard>
      <EducationCard
        delay={0.6}
      >
        <span className='font-semibold'>
          {language === 'es'
            ? 'Desarrollo de plataforma web para proyectos de ingenieria civil - 4 meses (10 horas por semana)'
            : 'Web platform development for civil engineering projects - 4 months (10 hours per week)'}
        </span>
        <p>
          {language === 'es' ? 'Como estudiante auxiliar participe en el desarrollo de la plataforma ' : 'As a student assistant, I participated in the development of the '}
          <Link href="https://duscun.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors">DUSCUN</Link>
          {language === 'es'
            ? ', una plataforma web disenada para gestionar y mostrar proyectos de ingenieria civil desarrollados por estudiantes de la Universidad Nacional de Colombia. Mi rol principal fue el desarrollo frontend con NextJS, Tailwind CSS y React, trabajando en colaboracion con un equipo multidisciplinario para crear una experiencia de usuario intuitiva y atractiva. En esta plataforma tambien desarrolle junto a mi companera, una calculadora para estimar la conductividad de la solucion de poros del concreto.'
            : ', a web platform designed to manage and showcase civil engineering projects developed by students from the National University of Colombia. My main role was frontend development with NextJS, Tailwind CSS, and React, collaborating with a multidisciplinary team to create an intuitive and attractive user experience. I also co-developed a calculator to estimate concrete pore solution conductivity.'}
        </p>
      </EducationCard>
      <EducationCard
        delay={0.9}
      >
        <span className='font-semibold'>
          {language === 'es' ? 'Desarrollo de proyectos academicos y personales - 6 meses' : 'Academic and personal project development - 6 months'}
        </span>
        <p>
          {language === 'es'
            ? 'Durante mi carrera universitaria he desarrollado diversos proyectos para las asignaturas, trabajando con tecnologias como Node.js, Electron, SQLite, React y JavaScript. Estos proyectos academicos me han permitido aprender metodologias agiles, arquitectura de software y el ciclo completo de desarrollo de aplicaciones. Paralelamente, en mi tiempo libre, he creado proyectos personales para profundizar en diferentes tecnologias, utilizando NextJS, React, Tailwind y diversas librerias del lado del frontend. Tambien he desarrollado APIs con Spring Boot, Express y Laravel, implementando bases de datos relacionales y no relacionales con MySQL, MongoDB y Firebase. Me apasiona seguir aprendiendo y mejorando mis habilidades tecnicas, y estos proyectos me han permitido precisamente eso, mientras desarrollo soluciones creativas y practicas.'
            : 'Throughout my university studies I have developed different projects for courses using technologies such as Node.js, Electron, SQLite, React, and JavaScript. These academic projects helped me learn agile methodologies, software architecture, and the full application development lifecycle. At the same time, in my free time I built personal projects to deepen my knowledge of different technologies, using NextJS, React, Tailwind, and several frontend libraries. I have also built APIs with Spring Boot, Express, and Laravel, implementing relational and non-relational databases with MySQL, MongoDB, and Firebase. I am passionate about continuing to learn and improve my technical skills, and these projects have been key for that while I build creative and practical solutions.'}
        </p>
      </EducationCard>
    </Section>
  )
}
