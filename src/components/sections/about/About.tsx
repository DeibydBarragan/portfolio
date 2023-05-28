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
          I am a full-stack web developer with experience in React, JavaScript, HTML, CSS, Tailwind, Bootstrap, Laravel, and relational database management with SQL, as well as Agile methodologies. I am capable of developing and maintaining complex web applications using a combination of cutting-edge technologies and proven development practices. Additionally, I am passionate about learning and constantly improving, always seeking to update my skills and expand my knowledge in the field of web development. My strong communication skills and problem-solving abilities make me a valuable team member, able to effectively communicate technical concepts and find creative solutions to challenges.
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