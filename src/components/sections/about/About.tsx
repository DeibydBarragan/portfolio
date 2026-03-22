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
        <h2>{language === 'es' ? 'Sobre mi' : 'About me'}</h2>
        <p>
          {language === 'es'
            ? 'Soy un desarrollador web fullstack con experiencia en desarrollo de aplicaciones frontend con NextJS, React, JavaScript, TypeScript, Tailwind, HTML y diferentes librerias de componentes. Tambien tengo experiencia desarrollando APIs con Spring Boot, Express y Laravel, manejo de bases de datos relacionales con SQL asi como no relacionales como Firebase o MongoDB, y desarrollo de soluciones con inteligencia artificial. Soy capaz de desarrollar y mantener apps complejas usando una combinacion de tecnologias de punta, IA y buenas practicas de desarrollo buscando siempre la mejor experiencia de usuario. Adicionalmente, me apasiona aprender y mejorar constantemente, buscando siempre actualizar mis habilidades y ampliar mis conocimientos en el campo del desarrollo de software. Mis fuertes habilidades de comunicacion y habilidades para resolver problemas me convierten en un miembro valioso del equipo, soy capaz de comunicar conceptos tecnicos de manera efectiva y encontrar soluciones creativas a los desafios.'
            : 'I am a full-stack web developer with experience building frontend applications with NextJS, React, JavaScript, TypeScript, Tailwind, HTML, and different component libraries. I also have experience building APIs with Spring Boot, Express, and Laravel, working with relational databases using SQL as well as non-relational ones like Firebase and MongoDB, and developing solutions with artificial intelligence. I can develop and maintain complex apps using a combination of modern technologies, AI, and solid engineering practices while always aiming for the best user experience. I am passionate about learning and improving continuously, always looking to update my skills and expand my software development knowledge. My strong communication and problem-solving abilities make me a valuable team member, capable of explaining technical concepts clearly and finding creative solutions to challenges.'}
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