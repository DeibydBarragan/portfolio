import Hero from '../components/sections/hero/Hero';
import About from "@/components/sections/about/About";
import Education from '../components/sections/education/Education';
import Layout from "@/components/layout/Layout";
import Skills from '@/components/sections/skills/Skills';
import Projects from '@/components/sections/projects/Projects';
import Contact from '@/components/sections/contact/Contact';
import UpButton from '@/components/pure/upButton/UpButton';
import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Deibyd Barragán | Portafolio</title>
      </Head>
      <Layout>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
        <UpButton/>
      </Layout>
    </>
  )
}
