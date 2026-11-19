import Image from "next/image"
import { HiDocumentDownload } from "react-icons/hi"
import { SiLinkedin, SiGithub } from "react-icons/si"
import Section from "../Section"
import { fadeIn, flyUp } from "@/animations/anim"
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { language } = useLanguage()
  const cvFile = language === 'es' ? '/files/deibyd_barragan_cv_es.pdf' : '/files/deibyd_barragan_cv_en.pdf'

  return (
    <Section
      className="md:flex-row items-center gap-6 md:w-9/12 lg:w-7/12 2xl:w-6/12"
      id="hero"
      transition={{delay: 0.5}}
      {...fadeIn}
    >
      <Image
        src="/images/foto.webp"
        alt={language === 'es' ? 'Retrato de Deibyd Santiago Barragán Gaitán' : 'Portrait of Deibyd Santiago Barragán Gaitán'}
        width={250}
        height={250}
        className="rounded-full"
      />
      <div className="flex flex-col gap-3">
        <motion.h3
          transition={{delay: 0.5}}
          {...flyUp}
        >
          Deibyd Santiago Barragán Gaitán
        </motion.h3>
        <motion.h1
          transition={{delay: 0.8}}
          {...flyUp}
        >
          {language === 'es' ? 'Desarrollador web full-stack' : 'Full-Stack Web Developer'}
        </motion.h1>
        <motion.p
          transition={{delay: 1.1}}
          {...flyUp}
        >
        {language === 'es'
          ? 'Estudio Ingeniería de Sistemas y Computación en la Universidad Nacional de Colombia. Tengo experiencia en desarrollo web y aseguramiento de calidad (QA), desde construir interfaces y APIs REST hasta probar y poner en producción plataformas institucionales.'
          : 'I study Systems and Computer Engineering at the National University of Colombia. My experience spans web development and quality assurance (QA), from building interfaces and REST APIs to testing and launching institutional platforms.'}
        </motion.p>
        <motion.div className="flex gap-3 flex-wrap"
          transition={{delay: 1.6}}
          {...fadeIn}
        >
          <a
            href={cvFile}
            download={language === 'es' ? 'deibyd_barragan_cv_es.pdf' : 'deibyd_barragan_cv_en.pdf'}
            className="btn-gradient"
            aria-label={language === 'es' ? 'Descargar CV' : 'Download CV'}
          >
            {language === 'es' ? 'Descargar CV' : 'Download CV'}
            <HiDocumentDownload className="text-xl"/>
          </a>
          <a
            href="https://www.linkedin.com/in/deibyd-barragan-68b59018b/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient"
            aria-label="LinkedIn"
          >
            LinkedIn
            <SiLinkedin className="text-xl"/>
          </a>
          <a
            href="https://github.com/DeibydBarragan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient"
            aria-label="GitHub"
          >
            GitHub
            <SiGithub className="text-xl"/>
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
