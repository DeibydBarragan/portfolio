import { MdPlaylistAddCheckCircle } from "react-icons/md"
import { Project } from "./projectComponent/interfaces"
import { SiFirebase, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si"

export const ProjectsData: Project[] = [
  {
    name: 'To-Do List',
    icon: <MdPlaylistAddCheckCircle size={43}/>,
    shortDescription: 'Una lista de tareas con un diseño minimalista y elegante, con la capacidad de agregar, eliminar y marcar como completada cada tarea.',
    longDescription: 'Una lista de tareas con un diseño minimalista y elegante, con la capacidad de agregar, eliminar y marcar como completada cada tarea. Esta aplicación fue creada con React, Typescript y TailwindCSS. Para el manejo de estado se utilizó Redux Toolkit y para el manejo de rutas se utilizó React Router. Para el almacenamiento de datos se utilizó Firebase Firestore y para la autenticación de usuarios se utilizó Firebase Auth.',
    learned: 'En este proyecto aprendí a utilizar Redux Toolkit para el manejo de estado, React Router para el manejo de rutas, Firebase Firestore para el almacenamiento de datos y Firebase Auth para la autenticación de usuarios.',
    mainLibraries: ['React-Router', 'React-Hook-Forms', 'Firebase Auth', 'Create-React-App', 'Yup'],
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
