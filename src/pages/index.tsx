import Hero from '../components/sections/hero/Hero';
import About from "@/components/sections/about/About";
import Education from '../components/sections/education/Education';
import Experience from '../components/sections/experience/Experience';
import Layout from "@/components/layout/Layout";
import Skills from '@/components/sections/skills/Skills';
import Projects from '@/components/sections/projects/Projects';
import Contact from '@/components/sections/contact/Contact';
import UpButton from '@/components/pure/upButton/UpButton';
import Head from 'next/head';
import { useLanguage } from '@/context/LanguageContext';

export default function Home(): JSX.Element {
  const { language } = useLanguage()

  return (
    <>
      <Head>
        <title>{language === 'es' ? 'Deibyd Barragan | Portafolio' : 'Deibyd Barragan | Portfolio'}</title>
      </Head>
      <Layout>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Education/>
        <Contact/>
        <UpButton/>
      </Layout>
    </>
  )
}
