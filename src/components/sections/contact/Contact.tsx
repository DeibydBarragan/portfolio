import Section from "../Section"
import { SiLinkedin, SiWhatsapp } from "react-icons/si"
import { HiMail } from "react-icons/hi"
import ContactForm from "./ContactForm"
import BgShapes from "@/components/pure/bgShapes/BgShapes"
import { motion } from 'framer-motion';
import { flyRight } from "@/animations/anim"
import { useLanguage } from "@/context/LanguageContext";

type Props = {}

export default function Contact({}: Props) {
  const { language } = useLanguage()

  return (
    <Section
      className="md:grid grid-cols-1 md:grid-cols-2 md:flex-row items-center md:w-9/12 lg:w-7/12 2xl:w-6/12"
      id="contact"
    >
      <BgShapes
        className="h-96 w-96 bg-violet-500 dark:bg-indigo-800 right-0 bottom-0 md:bottom-auto"
      />
        <motion.div
          className="flex flex-col gap-3"
          transition={{
            delay: 0.2,
            duration: 0.4
          }}
          {...flyRight}
        >
          <h2>{language === 'es' ? 'Contactame' : 'Contact me'}</h2>
          <h3>{language === 'es' ? 'Trabajemos juntos' : "Let's work together"}</h3>
          <p>
            {language === 'es'
              ? 'Gracias por llegar hasta aqui. Si piensas que puedo aportar valor a tu equipo, puedes contactarte conmigo a traves de este formulario o a traves de mis redes sociales. Tambien puedes enviar un correo a deibydbarragan@gmail.com.'
              : 'Thanks for making it this far. If you think I can bring value to your team, you can contact me through this form or through my social profiles. You can also email me at deibydbarragan@gmail.com.'}
          </p>
          <div className="flex gap-4 text-5xl">
            <a className="cursor-pointer text-blue-600 hover:opacity-80 transition ease-in-out" href='https://www.linkedin.com/in/deibyd-barragan-68b59018b/' target='_blank' aria-label={language === 'es' ? 'linkedin' : 'linkedin'}>
              <SiLinkedin/>
            </a>
            <a className="text-green-500 cursor-pointer hover:opacity-80 transition ease-in-out" href='https://wa.link/79ptyy' target='_blank' aria-label={language === 'es' ? 'whatsapp' : 'whatsapp'}>
              <SiWhatsapp/>
            </a>
            <a className="cursor-pointer hover:opacity-80 transition ease-in-out" href="mailto:deibydbarragan@gmail.com" aria-label={language === 'es' ? 'enviar correo' : 'send email'}>
              <HiMail/>
            </a>
          </div>
        </motion.div>
        <ContactForm/>
    </Section>
  )
}