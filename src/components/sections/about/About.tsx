import NeonCard from "./neonCard/NeonCard";
import { getCardsData } from "./cards.data"
import Section from "../Section";
import BgShapes from "@/components/pure/bgShapes/BgShapes";
import { motion } from 'framer-motion';
import { flyRight } from "@/animations/anim";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { language } = useLanguage()
  const cardsData = getCardsData(language)

  return (
    <Section
      className="sm:w-10/12  md:w-7/12 lg:w-6/12 2xl:w-5/12"
      id="about"
    >
      <motion.div
        className="flex flex-col gap-3"
        {...flyRight}
      >
        <h2>{language === 'es' ? 'Sobre mí' : 'About me'}</h2>
        <p>
          {language === 'es'
            ? 'Soy estudiante de Ingeniería de Sistemas y Computación de la Universidad Nacional de Colombia, con experiencia práctica en desarrollo web full-stack y aseguramiento de calidad (QA). He participado en el diseño, construcción y puesta en producción de plataformas web institucionales, desarrollando interfaces modulares, APIs REST y modelos de datos con Next.js, React, TypeScript, Express y Spring Boot.'
            : 'I am a Systems and Computer Engineering student at the National University of Colombia, with hands-on experience in full-stack web development and quality assurance (QA). I have contributed to the design, development, and production launch of institutional web platforms, building modular interfaces, REST APIs, and data models with Next.js, React, TypeScript, Express, and Spring Boot.'}
        </p>
        <p>
          {language === 'es'
            ? 'Tengo experiencia en pruebas funcionales y de integración para contribuir a la estabilidad del software, y aplico flujos de desarrollo asistidos por agentes de IA y metodologías guiadas por especificaciones (SDD). Me caracterizo por trabajar de forma colaborativa en equipos multidisciplinarios, comunicar conceptos técnicos con claridad y enfocarme en construir soluciones escalables, seguras y bien documentadas.'
            : 'I have experience with functional and integration testing to support software stability, and I use AI agent-assisted development workflows and spec-driven development (SDD) methodologies. I value collaboration across multidisciplinary teams, clear technical communication, and building scalable, secure, and well-documented solutions.'}
        </p>
      </motion.div>
      <div className="relative grid grid-cols-1  sm:grid-cols-2 gap-3">
        <BgShapes
          className="bg-orange-600 w-60 h-60 animate-blob"
        />
        <BgShapes
          className="bg-indigo-600 w-60 h-60 left-40 animate-blob animation-delay-2"
        />
        <BgShapes
          className="bg-sky-600 w-60 h-60 left-96 animate-blob animation-delay-3"
        />
        {
          cardsData.map((card, index) => (
            <NeonCard
              index={index}
              key={index}
              {...card}
            />
          ))
        }
      </div>
    </Section>
  )
}
