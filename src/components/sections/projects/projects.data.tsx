import { MdPlaylistAddCheckCircle } from "react-icons/md"
import {DetailedProject, Project} from "./projectComponent/interfaces"
import { FaFire, FaJava, FaLaptopMedical, FaRobot } from "react-icons/fa"
import { SiTypescript, SiSpringboot, SiPostgresql, SiNextdotjs, SiFirebase, SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiSqlite, SiElectron } from "react-icons/si"
import { Language } from "@/context/LanguageContext"

export const getProjectsData = (language: Language): DetailedProject[] => {
  const isSpanish = language === 'es'

  return [
    {
      name: 'Ignite Suite',
      icon: <FaFire size={36}/>,
      shortDescription: isSpanish
        ? 'Suite para controlar bots de Discord desde un dashboard web, con música, síntesis de voz y soundboard. Incluye un launcher de escritorio para supervisar el bot de música.'
        : 'A suite for controlling Discord bots from a web dashboard, with music, text-to-speech, and a soundboard. It includes a desktop launcher for monitoring the music bot.',
      longDescription: isSpanish
        ? 'Diseñé una arquitectura de microservicios con APIs REST para conectar el dashboard web con Ignite Music e Ignite Sound. El dashboard reúne los controles de reproducción, la cola de música, la síntesis de voz y el soundboard. Desplegué Ignite Sound en AWS EC2 y desarrollé un launcher en Electron para iniciar, detener y supervisar el bot de música.'
        : 'I designed a microservices architecture with REST APIs to connect the web dashboard to Ignite Music and Ignite Sound. The dashboard brings together playback controls, the music queue, text-to-speech, and the soundboard. I deployed Ignite Sound on AWS EC2 and built an Electron launcher to start, stop, and monitor the music bot.',
      learned: isSpanish
        ? 'Profundicé en la integración de servicios independientes mediante APIs REST, el despliegue en AWS EC2 y la supervisión de procesos desde una aplicación de escritorio.'
        : 'I deepened my experience integrating independent services through REST APIs, deploying to AWS EC2, and supervising processes from a desktop app.',
      mainLibraries: ['React', 'Discord.js', 'Supabase', 'AWS EC2'],
      repository: 'https://github.com/DeibydBarragan/ignite-frontend',
      relatedRepositories: [
        { name: 'Ignite Music', url: 'https://github.com/DeibydBarragan/ignite-music' },
        { name: 'Ignite Sound', url: 'https://github.com/DeibydBarragan/ignite-sound' },
        { name: 'Ignite Music Desktop', url: 'https://github.com/DeibydBarragan/ignite-music-desktop' },
      ],
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs className='text-black dark:text-white'/> },
        { name: 'Node.js', icon: <SiNodedotjs className='text-green-500'/> },
        { name: 'Electron', icon: <SiElectron className='text-blue-400'/> },
      ],
      languages: [
        { name: 'TypeScript', icon: <SiTypescript className='text-blue-600'/> },
        { name: 'JavaScript', icon: <SiJavascript className='text-yellow-500'/> },
      ],
      imagesLocation: 'ignite',
      imagesNumber: 4,
      imageDescriptions: isSpanish
        ? ['Dashboard web de Ignite con los controles de música', 'Launcher de Ignite Music con los controles del bot y el registro de actividad', 'Vista de voz y síntesis de voz de Ignite', 'Soundboard del dashboard web de Ignite']
        : ['Ignite web dashboard with music controls', 'Ignite Music desktop launcher with bot controls and activity log', 'Ignite voice and text-to-speech view', 'Soundboard in the Ignite web dashboard'],
    },
    {
      name: 'Pretty Exam',
      icon: <FaRobot size={40}/> ,
      shortDescription: isSpanish
        ? 'Una herramienta de estudio autonomo que permite crear, gestionar y realizar examenes personalizados utilizando un banco de preguntas propio, complementado con la capacidad de generar preguntas automaticamente mediante IA.'
        : 'A self-study tool that allows users to create, manage, and take personalized exams using their own question bank, with AI-assisted automatic question generation.',
      longDescription: isSpanish
        ? 'Pretty Exam es una herramienta de estudio autonomo disenada especificamente para personas que buscan una mejor manera de preparacion academica. La aplicacion permite crear, gestionar y realizar examenes personalizados utilizando un banco de preguntas propio que crea el usuario, complementado tambien con la capacidad de generar preguntas automaticamente mediante IA a partir de un PDF. El objetivo principal es proporcionar a las personas una herramienta para el autoaprendizaje y la autoevaluacion, donde cada persona puede crear sus propios bancos de preguntas organizados por categorias, asi como tambien generar contenido de evaluacion de manera automatica usando IA, y realizar examenes personalizados que les permitan medir sus habilidades de forma efectiva autonomamente.'
        : 'Pretty Exam is a self-study tool designed for people looking for a better way to prepare academically. The app allows users to create, manage, and take personalized exams using their own question bank, and also generate questions automatically with AI from a PDF. Its main goal is to provide a practical tool for self-learning and self-assessment, where users can build categorized question banks, generate evaluation content automatically, and take custom exams to measure their skills effectively.',
      learned: isSpanish
        ? 'Este proyecto fue desarrollado como parte de la materia de Ingenieria de Software 1 en la Universidad Nacional de Colombia. En este proyecto aprendi sobre metodologias agiles de desarrollo, trabajo en equipo usando Git y GitHub, arquitectura de software, y el ciclo completo de desarrollo de una aplicacion desde la concepcion hasta la implementacion. Tambien profundice en el desarrollo con Node.js y JavaScript, manejo de bases de datos SQLite, y la integracion de servicios de IA para automatizar la generacion de contenido educativo.'
        : 'This project was developed for Software Engineering I at the National University of Colombia. I learned agile methodologies, team collaboration with Git and GitHub, software architecture, and the full lifecycle of application development from concept to implementation. I also deepened my experience with Node.js and JavaScript, SQLite database management, and integration of AI services to automate educational content generation.',
      mainLibraries: ['DaisyUI', 'SQLite3', 'React', 'Gemini API', 'Vite', 'Jest', 'eslint'],
      repository: 'https://github.com/Bellic12/2025-1_IngeSoft1',
      technologies: [
        {
          name: 'Node.js',
          version: '18',
          icon: <SiNodedotjs className='text-green-500'/>,
        },
        {
          name: 'Electron',
          version: '32',
          icon: <SiElectron className='text-blue-400'/>,
        },
        {
          name: 'SQLite',
          version: '3',
          icon: <SiSqlite className='text-blue-500'/>,
        }
      ],
      languages: [
        {
          name: 'JavaScript',
          version: 'ES6',
          icon: <SiJavascript className='text-yellow-500'/>,
        },
        {
          name: 'HTML',
          version: '5',
          icon: <SiHtml5 className='text-red-500'/>,
        },
      ],
      imagesLocation: 'prettyExam',
      imagesNumber: 9,
    },
    {
      name: 'To-Do List',
      icon: <MdPlaylistAddCheckCircle size={43}/>,
      shortDescription: isSpanish
        ? 'Una lista de tareas con un diseno minimalista y elegante, con la capacidad de agregar, eliminar y marcar como completada cada tarea, ademas de tener autenticacion de usuario.'
        : 'A task manager with a minimalist and elegant design, allowing users to add, remove, and complete tasks, plus user authentication.',
      longDescription: isSpanish
        ? 'Una lista de tareas con un diseno minimalista y elegante, con la capacidad de agregar, eliminar y marcar como completada cada tarea. Tambien tiene funciones como el registro y el inicio de sesion, las tareas de los usuarios se sincronizan con la base de datos, y los usuarios pueden modificar datos como nombre, correo o foto. Esta aplicacion fue creada con React, JavaScript, TailwindCSS y Firebase. Para el manejo de estado se utilizo Context y para el manejo de rutas React Router. Para almacenamiento se utilizo Firebase Firestore y para autenticacion Firebase Auth.'
        : 'A task management app with a minimalist and elegant design, where users can add, remove, and mark tasks as completed. It also includes registration and login, task synchronization with a database, and profile editing features such as name, email, and photo. This app was built with React, JavaScript, TailwindCSS, and Firebase. State management was handled with Context, routing with React Router, data storage with Firebase Firestore, and authentication with Firebase Auth.',
      learned: isSpanish
        ? 'En este proyecto aprendi React a profundidad, aprendi a manejar estados globales de la aplicacion con Context, aprendi a manejar rutas con React Router, conoci Firebase y use por primera vez una base de datos no relacional, aprendi TailwindCSS y a dar animaciones a los elementos con Framer Motion y tambien aprendi a realizar un deploy con Github Pages. Ademas de esto entendi como funciona el flujo de una aplicacion de React y como se relacionan los componentes entre si.'
        : 'In this project I learned React in depth, global state management with Context, and routing with React Router. I also discovered Firebase and used a non-relational database for the first time. I improved my TailwindCSS skills, added animations with Framer Motion, and deployed the project with GitHub Pages. I gained a stronger understanding of React application flow and component architecture.',
      mainLibraries: ['React-Router', 'React-Hook-Form', 'Firebase', 'Create-React-App', 'Yup', 'ESlint', 'Framer-Motion', 'Github Pages', 'Moment'],
      repository: 'https://github.com/DeibydBarragan/To-do-list.git',
      live: 'https://deibydbarragan.github.io/To-do-list/',
      technologies: [
        {
          name: 'React',
          version: '17.0.2',
          icon: <SiReact className='text-blue-500'/>,
        }, 
        {
          name: 'TailwindCSS',
          version: '2.2.7',
          icon: <SiTailwindcss className='text-sky-500'/>,
        },
        {
          name: 'Firebase',
          version: '9.6.1',
          icon: <SiFirebase className='text-yellow-500'/>,
        }
      ],
      languages: [
        {
          name: 'Javascript',
          version: 'ES6',
          icon: <SiJavascript className='text-yellow-500'/>,
        },
        {
          name: 'HTML',
          version: '5',
          icon: <SiHtml5 className='text-red-500'/>,
        },
      ],
      imagesLocation: 'todo',
      imagesNumber: 9,
    },
    {
      name: 'EPS Rest API',
      icon: <FaLaptopMedical size={40}/>,
      shortDescription: isSpanish
        ? 'Aplicacion que permite acceder a una base de datos PostgreSQL para gestionar citas medicas de manera eficiente, con operaciones CRUD y filtros por paciente, medico y especialidad.'
        : 'An application that connects to a PostgreSQL database to manage medical appointments efficiently, with CRUD operations and filters by patient, doctor, and specialty.',
      longDescription: isSpanish
        ? 'Es una aplicacion que permite acceder a una base de datos PostgreSQL para gestionar citas medicas de manera eficiente. Incluye funcionalidades para ver, crear, actualizar y eliminar citas, pacientes y medicos, asi como filtrar citas por cedula del paciente, cedula del medico y especialidad. Esta desarrollada principalmente con Spring Boot del lado del servidor y NextJS del lado del cliente.'
        : 'This application provides access to a PostgreSQL database to manage medical appointments efficiently. It includes features to view, create, update, and delete appointments, patients, and doctors, as well as filters by patient ID, doctor ID, and specialty. It was developed mainly with Spring Boot on the backend and NextJS on the frontend.',
      learned: isSpanish
        ? 'Este proyecto me permitio afianzar mis conocimientos y habilidades con NextJS y TypeScript. Aprendi a usar la libreria de componentes NextUI y a consumir un microservicio desde el frontend. Del lado del servidor aprendi los fundamentos de Spring Boot y Java para desarrollar APIs. Tambien fue una oportunidad para usar Postman para probar endpoints, Docker para construir la imagen del proyecto y desplegarla en un contenedor, y para reforzar diseno e implementacion de bases de datos relacionales con PostgreSQL.'
        : 'This project helped me strengthen my knowledge of NextJS and TypeScript. I learned to use the NextUI component library and consume a microservice from the frontend. On the backend, I learned the fundamentals of Spring Boot and Java for API development. It was also an opportunity to use Postman for endpoint testing, Docker for image creation and container deployment, and to reinforce relational database design and implementation with PostgreSQL.',
      mainLibraries: ['NextUI', 'React-Hook-Form', 'Yup', 'ESlint', 'Lucide React', 'React Toastify', 'MomentJS'],
      repository: 'https://github.com/DeibydBarragan/eps-spring-rest-api',
      technologies: [
        {
          name: 'NextJS',
          version: '13',
          icon: <SiNextdotjs className='text-black dark:text-white'/>,
        },
        {
          name: 'Spring Boot',
          version: '4',
          icon: <SiSpringboot className='text-green-500'/>,
        },
        {
          name: 'PostgreSQL',
          version: '15',
          icon: <SiPostgresql className='text-blue-500'/>,
        }
      ],
      languages: [
        {
          name: 'TypeScript',
          version: 'ES6',
          icon: <SiTypescript className='text-blue-600'/>,
        },
        {
          name: 'Java',
          version: '17',
          icon: <FaJava className='text-red-500'/>,
        },
      ],
      imagesLocation: 'eps',
      imagesNumber: 15,
    },
  ]
}

export const getOtherProjects = (language: Language): Project[] => [
  {
    name: 'Soft Minds Magazine',
    live: 'https://soft-minds-magazine.vercel.app/',
    imagesLocation: 'softminds',
    imagesNumber: 7,
  },
  {
    name: 'uBudget',
    live: 'https://ubudget-eta.vercel.app/',
    imagesLocation: 'ubudget',
    imagesNumber: 8,
  },
  {
    name: 'Tapredit',
    repository: 'https://github.com/DeibydBarragan/tapredit',
    live: 'https://tapredit.vercel.app/',
    imagesLocation: 'tapredit',
    imagesNumber: 13,
  },
  {
    name: language === 'es' ? 'Cursos libres UN' : 'UN Open Courses',
    repository: 'https://github.com/DeibydBarragan/cursos-libres',
    live: 'https://cursos-libres.vercel.app/',
    imagesLocation: 'cursoslibres',
    imagesNumber: 12,
  },
  {
    name: 'Sena Food-Site',
    repository: 'https://github.com/DeibydBarragan/sena-food-site',
    imagesLocation: 'foodsite',
    imagesNumber: 28,
  },
]
