import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="es">
      <Head>
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
