import NeonCard from "./neonCard/NeonCard";
import { cardsData } from "./cards.data"
import Section from "../Section";
import BgShapes from "@/components/pure/bgShapes/BgShapes";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Section
      className="sm:w-10/12  md:w-7/12 lg:w-6/12 2xl:w-5/12"
      id="about"
    >
      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2>Sobre mí</h2>
        <p>
          Soy un desarrollador web font-end con experiencia en NextJS, React, JavaScript, TypeScript, Tailwind, HTML, CSS, Bootstrap, Laravel y manejo de bases de datos relacionales con SQL así como no relacionales como Firebase. Soy capaz de desarrollar y mantener aplicaciones web complejas usando una combinación de tecnologías de punta y buenas prácticas de desarrollo buscando siempre la mejor experiencia de usuario. Adicionalmente, me apasiona aprender y mejorar constantemente, buscando siempre actualizar mis habilidades y ampliar mis conocimientos en el campo del desarrollo web. Mis fuertes habilidades de comunicación y habilidades para resolver problemas me convierten en un miembro valioso del equipo, capaz de comunicar conceptos técnicos de manera efectiva y encontrar soluciones creativas a los desafíos.
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