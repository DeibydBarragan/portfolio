import Hero from '../components/sections/hero/Hero';
import About from "@/components/sections/about/About";
import Education from '../components/sections/education/Education';
import Layout from "@/components/layout/Layout";
import Skills from '@/components/sections/skills/Skills';
import Projects from '@/components/sections/projects/Projects';
import Contact from '@/components/sections/contact/Contact';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </Layout>
  )
}
