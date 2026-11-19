import Section from '../Section'
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
      <EducationCard delay={0.3}>
        <h3 className='text-lg font-semibold'>
          {language === 'es' ? 'Estudiante auxiliar de desarrollo web y QA' : 'Student Assistant, Web Development and QA'}
        </h3>
        <p className='font-medium'>
          {language === 'es' ? 'Bienestar Universitario, Universidad Nacional de Colombia' : 'Student Wellbeing, National University of Colombia'}
        </p>
        <p className='text-sm'>
          {language === 'es' ? 'Mayo a octubre de 2026 · 10 horas por semana' : 'May to October 2026 · 10 hours per week'}
        </p>
        <ul className='mt-3 list-disc space-y-2 pl-5'>
          <li>{language === 'es'
            ? 'Desarrollé servicios REST y tareas programadas para gestionar cupos, registrar asistencia con códigos QR y calcular horas acumuladas.'
            : 'I developed REST services and scheduled tasks to manage capacity, track attendance with QR codes, and calculate accumulated hours.'}</li>
          <li>{language === 'es'
            ? 'Conecté las interfaces a las APIs y unifiqué los componentes de tablas y navegación según el diseño en Figma.'
            : 'I connected interfaces to live APIs and standardized table and navigation components to match the Figma designs.'}</li>
          <li>{language === 'es'
            ? 'Realicé pruebas funcionales, de concurrencia y de acceso basado en roles (RBAC) en escritorio y móvil. Gestioné defectos y casos de borde en Plane.'
            : 'I ran functional, concurrency, and role-based access control (RBAC) tests on desktop and mobile, and tracked defects and edge cases in Plane.'}</li>
        </ul>
      </EducationCard>
      <EducationCard delay={0.45}>
        <h3 className='text-lg font-semibold'>
          {language === 'es' ? 'Desarrollador full-stack y líder de frontend' : 'Full-Stack Developer and Frontend Lead'}
        </h3>
        <p className='font-medium'>
          {language === 'es' ? 'Fundación Jaime Benítez Tobón, Hogar Estudiantil' : 'Jaime Benítez Tobón Foundation, Student Residence'}
        </p>
        <p className='text-sm'>
          {language === 'es' ? 'Marzo a agosto de 2026' : 'March to August 2026'}
        </p>
        <p className='mt-3'>
          {language === 'es' ? 'Lideré el frontend de ' : 'I led frontend development for '}
          <Link href="https://www.hogarestudiantil.org/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 underline dark:text-blue-400">FJTB App</Link>
          {language === 'es'
            ? ', la plataforma que digitaliza la gestión del hogar estudiantil. La fundación certificó el despliegue y su operación en producción.'
            : ', the platform that digitizes student residence operations. The foundation certified its deployment and operation in production.'}
        </p>
        <ul className='list-disc space-y-2 pl-5'>
          <li>{language === 'es'
            ? 'Definí el sistema de diseño e implementé componentes adaptables con Next.js 16, React 19, TypeScript, Tailwind CSS y shadcn/ui.'
            : 'I created the design system and implemented responsive components with Next.js 16, React 19, TypeScript, Tailwind CSS, and shadcn/ui.'}</li>
          <li>{language === 'es'
            ? 'Desarrollé el backend con Express, MySQL y Sequelize. Usé agentes de IA para organizar e implementar funcionalidades con el equipo.'
            : 'I developed the backend with Express, MySQL, and Sequelize. I used AI agents to plan and implement features with the team.'}</li>
        </ul>
      </EducationCard>
      <EducationCard delay={0.6}>
        <h3 className='text-lg font-semibold'>
          {language === 'es' ? 'Desarrollador e instructor de programación' : 'Developer and Programming Instructor'}
        </h3>
        <p className='font-medium'>
          {language === 'es' ? 'Aula STEAM, Universidad Nacional de Colombia' : 'STEAM Classroom, National University of Colombia'}
        </p>
        <p className='text-sm'>
          {language === 'es' ? 'Voluntariado · 16 meses durante 4 semestres · 8 horas por semana' : 'Volunteer · 16 months over 4 semesters · 8 hours per week'}
        </p>
        <ul className='list-disc space-y-2 pl-5'>
          <li>{language === 'es' ? 'Desarrollé un sistema de conducción para un vehículo AWS DeepRacer con tecnologías web y Linux.' : 'I built a control system for an AWS DeepRacer vehicle using web technologies and Linux.'}</li>
          <li>{language === 'es' ? 'Automaticé las estadísticas de uso con Power BI, participé en el sistema de solicitudes de equipos y asesorías, y desarrollé un chat para orientar a quienes usaban el aula.' : 'I automated usage statistics with Power BI, contributed to the equipment and mentoring request system, and built a chat assistant to guide classroom users.'}</li>
        </ul>
        <p>
          {language === 'es' ? 'Impartí capacitaciones y asesorías en programación y herramientas digitales. La universidad me otorgó las insignias de ' : 'I taught and mentored community members in programming and digital tools. The university awarded me the '}
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
          </Link>{language === 'es' ? '.' : ' badges.'}
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
      </EducationCard>
      <EducationCard delay={0.75}>
        <h3 className='text-lg font-semibold'>
          {language === 'es' ? 'Estudiante auxiliar de desarrollo frontend' : 'Student Assistant, Frontend Development'}
        </h3>
        <p className='font-medium'>DUSCUN, {language === 'es' ? 'Universidad Nacional de Colombia' : 'National University of Colombia'}</p>
        <p className='text-sm'>
          {language === 'es' ? '2025 · 4 meses · 10 horas por semana' : '2025 · 4 months · 10 hours per week'}
        </p>
        <p>
          {language === 'es' ? 'Como estudiante auxiliar participe en el desarrollo de la plataforma ' : 'As a student assistant, I participated in the development of the '}
          <Link href="https://duscun.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors">DUSCUN</Link>
          {language === 'es'
            ? ', una plataforma que gestiona y exhibe proyectos de ingeniería civil. Construí interfaces con Next.js, React y Tailwind CSS, y desarrollé en equipo una calculadora para estimar la conductividad de la solución de poros del concreto.'
            : ' web platform for managing and showcasing civil engineering projects. I built interfaces with Next.js, React, and Tailwind CSS and co-developed a calculator to estimate concrete pore solution conductivity.'}
        </p>
      </EducationCard>
    </Section>
  )
}
