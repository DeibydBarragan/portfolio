import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Bienvenido al portafolio de proyectos de desarrollo web fullstack de Deibyd Santiago Barragán Gaitán. Aquí encontrarás una muestra de los diversos proyectos en los que he trabajado, demostrando mi experiencia y habilidades en el desarrollo web tanto en el frontend como en el backend. Explora mi portafolio para descubrir sitios web interactivos, aplicaciones web y soluciones personalizadas que he creado utilizando las últimas tecnologías y mejores prácticas de la industria. Cada proyecto refleja mi pasión por el diseño atractivo, la funcionalidad impecable y la experiencia de usuario excepcional. Con mi enfoque orientado a resultados, estoy comprometido en ofrecer soluciones de alta calidad que satisfagan las necesidades de mis clientes. ¡Explora mi portafolio y contáctame para discutir cómo puedo ayudarte a alcanzar tus objetivos de desarrollo web!"/>
        <meta name="keywords" content="Deibyd Barragán, Desarrollador de software, Frontend, Backend, React, NextJS, Tailwind, librerías de componentes, responsive design, Express, Spring Boot, Laravel, JavaScript, TypeScript, Java, PHP, MySQL, PostgreSQL, Desarrollo web, Portafolio, Proyectos"/>
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
      <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@700&family=Roboto&display=swap" rel="stylesheet"/>
      <body id='body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
