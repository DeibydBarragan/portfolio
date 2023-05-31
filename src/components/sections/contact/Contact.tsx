import Section from "../Section"
import { SiLinkedin, SiWhatsapp } from "react-icons/si"
import { HiMail } from "react-icons/hi"
import ContactForm from "./ContactForm"
import BgShapes from "@/components/pure/bgShapes/BgShapes"
import { motion } from 'framer-motion';

type Props = {}

export default function Contact({}: Props) {
  return (
    <Section
      className="grid grid-cols-1 gap-8 md:grid-cols-2 md:flex-row items-center md:w-9/12 lg:w-7/12 2xl:w-6/12"
      id="contact"
    >
      <BgShapes
        className="h-96 w-96 bg-violet-500 dark:bg-indigo-800 right-0 bottom-0 md:bottom-auto"
      />
        <motion.div
          className="flex flex-col gap-3"
          initial={{
            opacity: 0,
            x: -10
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.2,
            duration: 0.4
          }}
        >
          <h2>Contáctame</h2>
          <h3>Trabajemos juntos</h3>
          <p>
            Gracias por llegar hasta aquí, si piensas que puedo aportar valor a tu equipo puedes contactarte conmigo a través de este formulario o a través de mis redes sociales. También puedes enviar un correo a deibydbarragan@gmail.com
          </p>
          <div className="flex gap-4 text-5xl">
            <a className="cursor-pointer text-blue-600" href='https://www.linkedin.com/in/deibyd-barragan-68b59018b/' target='_blank'>
              <SiLinkedin/>
            </a>
            <a className="text-green-500 cursor-pointer" href='https://wa.link/79ptyy' target='_blank'>
              <SiWhatsapp/>
            </a>
            <a className="cursor-pointer" href="mailto:deibydbarragan@gmail.com">
              <HiMail/>
            </a>
          </div>
        </motion.div>
        <div>
          <ContactForm/>
        </div>
    </Section>
  )
}