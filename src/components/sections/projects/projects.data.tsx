import { MdPlaylistAddCheckCircle } from "react-icons/md"
import { Project } from "./projectComponent/interfaces"
import { SiFirebase, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si"

export const ProjectsData: Project[] = [
  {
    name: 'To-Do List',
    icon: <MdPlaylistAddCheckCircle size={43}/>,
    shortDescription: 'Una lista de tareas con un diseño minimalista y elegante, con la capacidad de agregar, eliminar y marcar como completada cada tarea, además de tener un usuario.',
    longDescription: 'Una lista de tareas con un diseño minimalista y elegante, con la capacidad de agregar, eliminar y marcar como completada cada tare, también tiene funciones como el registro y el inicio de sesión, las tareas de los usuarios se sincronizan con la base de datos, además del CRUD de las tareas los usuarios pueden modificar sus datos como el nombre, correo, foto, etc. Esta aplicación fue creada con React, Javascript, TailwindCSS y Firebase. Para el manejo de estado se utilizó Context y para el manejo de rutas se usé React Router. Para el almacenamiento de datos se utilizó Firebase Firestore y para la autenticación de usuarios utilicé Firebase Auth.',
    learned: 'En este proyecto aprendí React a profundidad, aprendí a manejar estados globales de la aplicación con Context, aprendí a manejar rutas con React Router, conocí Firebase y use por primera vez una base de datos no relacional, aprendí TailwindCSS y darle animaciones a los elementos con Framer Motion y también aprendí realizar un deploy con Github Pages. Además de esto entendí cómo funciona el flujo de una aplicación de React y cómo se relacionan los componentes entre sí. En este proyecto conocí cómo son las buenas prácticas de un proyecto de React y cómo se debe estructurar.',
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
    images: [
      'todo/todo1',
      'todo/todo2',
      'todo/todo3',
      'todo/todo4',
      'todo/todo5',
      'todo/todo6',
      'todo/todo7',
      'todo/todo8',
      'todo/todo9'
    ],
  },
]
