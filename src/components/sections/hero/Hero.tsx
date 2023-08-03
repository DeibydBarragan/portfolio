import Image from "next/image"
import { HiDocumentDownload, HiMail } from "react-icons/hi"
import { Link } from "react-scroll"
import Section from "../Section"
import { fadeIn, flyUp } from "@/animations/anim"
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <Section
      className="md:flex-row items-center gap-6 md:w-9/12 lg:w-7/12 2xl:w-6/12"
      id="hero"
      transition={{delay: 0.5}}
      {...fadeIn}
    >
      <Image
        src="/images/foto.webp"
        alt="Picture of the author"
        width={250}
        height={250}
        className="rounded-full"
      />
      <div className="flex flex-col gap-3">
        <motion.h3
          transition={{delay: 0.5}}
          {...flyUp}
        >
          Debyd Barragán
        </motion.h3>
        <motion.h1
          transition={{delay: 0.8}}
          {...flyUp}
        >
          Desarrollador fullstack
        </motion.h1>
        <motion.p
          transition={{delay: 1.1}}
          {...flyUp}
        >
        Soy un desarrollador web fullstack con experiencia en NextJS, React, TypeScript, Tailwind, Express, Spring Boot, etc. Capaz de desarrollar y mantener aplicaciones web complejas y responsivas buscando siempre la mejor experiencia de usuario, me apasiona lo que hago y siempre busco aprender y mejorar.
        </motion.p>
        <motion.div className="flex gap-3"
          transition={{delay: 1.6}}
          {...fadeIn}
        >
          <a
            href="/files/CV.pdf" 
            download="CV.pdf"
            className="btn-gradient"  
          >
            Descargar CV
            <HiDocumentDownload className="text-xl"/>
          </a>
          <Link
            className="btn-gradient"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contáctame
            <HiMail className="text-xl"/>
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}