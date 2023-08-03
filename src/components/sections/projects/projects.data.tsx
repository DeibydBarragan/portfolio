import { MdPlaylistAddCheckCircle } from "react-icons/md"
import { Project } from "./projectComponent/interfaces"
import { FaJava, FaLaptopMedical } from "react-icons/fa"
import { MdFastfood } from "react-icons/md"
import { SiBootstrap, SiTypescript, SiSpringboot, SiPostgresql, SiNextdotjs, SiFirebase, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiPhp, SiReact, SiTailwindcss } from "react-icons/si"

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
    imagesLocation: 'todo',
    imagesNumber: 9,
  },
  {
    name: 'EPS Rest API',
    icon: <FaLaptopMedical size={40}/>,
    shortDescription: 'Es una aplicación permite acceder a una base de datos PostgreSQL para gestionar citas médicas de manera eficiente. Con funcionalidades para ver, crear, actualizar y eliminar citas, pacientes y médicos, así como filtrar citas por cédula del paciente, cédula del médico y especialidad.',
    longDescription: 'Es una aplicación te permite acceder a una base de datos PostgreSQL para gestionar citas médicas de manera eficiente. Con funcionalidades para ver, crear, actualizar y eliminar citas, pacientes y médicos, así como filtrar citas por cédula del paciente, cédula del médico y especialidad. Está desarrollada principalmente con Spring Boot del lado del servidor y NextJS del lado del cliente.',
    learned: 'Este proyecto me permitió afianzar mis conocimientos y habilidades co NextJS y Typescript, adicionalmente aprendí a usar la librería de componentes NextUI y a consumir un microservicio del lado del frontend. Del lado del servidor aprendí los fundamentos de Spring Boot y Java para desarrollar APIs, también fue una oportunidad de aprender a usar herramientas como Postman para testear los endpoints, Docker para construir la imagen del proyecto y desplegarlo en un contenedor. Además de todo esto, afiance mis conocimientos en diseño e implementación de bases de datos relacionales con PostgreSQL.',
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
  {
    name: 'Sena Food-Site',
    icon: <MdFastfood size={40}/>,
    shortDescription: 'Una aplicación de tipo e-commerce autoadministrable que permite gestionar productos, pedidos y usuarios de un restaurante, todo en una interfaz amigable y responsiva.',
    longDescription: 'Una aplicación de tipo e-commerce autoadministrable que permite gestionar productos, pedidos y usuarios de un restaurante, todo en una interfaz amigable y responsiva. Esta aplicación fue realizada para el restaurante de una sede del Servicio Nacional de Aprendizaje (SENA) ubicada en Bogotá, Colombia. Tiene diferentes roles tales como invitado, consumidor, vendedor y administrador, entrando como invitado es posible visualizar los diferentes productos del restaurante. Como consumidor es posible agregar productos al carrito y hacer pedidos, además de enviar comentarios al soporte técnico, también está la posibilidad de modificar algunos datos del perfil. Ingresando como vendedor también se tiene acceso a visualizar los productos, pero también a modificarlos, es imposible hacer pedidos y se tiene la funcionalidad de gestionar los pedidos que hacen los usuarios y los productos. Como administrador se pueden administrar los productos, los usuarios y los comentarios del soporte técnico. Esta aplicación fue desarrollada con el framework Laravel en conjunto con PHP, y para el frontend se usó Bootstrap. Los datos eran almacenados en una base de datos de MySQL.',
    learned: 'Este proyecto fue mi primera oportunidad para aprender a desarrollar aplicaciones full-stack haciendo uso de frameworks y herramientas de vanguardia. Aprendí a realizar REST APIs, autenticación y manejo de roles, también aprendí a realizar diseños responsivos y amigables con el usuario, además de hacer mi primer despliegue en la plataforma de Hostinger, adicionalmente aprendí a diseñar bases de datos relacionales y a gestionarlas usando MySQL.',
    repository: 'https://github.com/DeibydBarragan/sena-food-site',
    technologies: [
      {
        name: 'Laravel',
        version: '9',
        icon: <SiLaravel className='text-red-500'/>,
      },
      {
        name: 'Bootstrap',
        version: '4',
        icon: <SiBootstrap className='text-purple-500'/>,
      },
      {
        name: 'MySQL',
        version: '8',
        icon: <SiMysql className='text-blue-500'/>,
      }
    ],
    languages: [
      {
        name: 'PHP',
        version: '8.1.0',
        icon: <SiPhp className='text-blue-600'/>,
      },
      {
        name: 'HTML',
        version: '5',
        icon: <SiHtml5 className='text-red-500'/>,
      },
    ],
    imagesLocation: 'foodsite',
    imagesNumber: 28,
  }
]
