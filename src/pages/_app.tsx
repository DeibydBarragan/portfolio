
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { LanguageProvider } from '@/context/LanguageContext'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <LanguageProvider>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
)}
