import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
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
