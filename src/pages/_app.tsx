
import { NavbarContextProvider } from '@/components/context/NavbarContext'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <NavbarContextProvider>
        <Component {...pageProps} />
      </NavbarContextProvider>
    </ThemeProvider>
)}
