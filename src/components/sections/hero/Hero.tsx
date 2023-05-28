import Image from "next/image"
import { HiDocumentDownload, HiMail } from "react-icons/hi"
import { Link } from "react-scroll"
import Section from "../Section"

export default function Hero() {
  return (
    <Section
      className="md:flex-row items-center gap-6 md:w-9/12 lg:w-7/12 2xl:w-6/12"
      id="hero"
      initial={{opacity: 0, y:10}}
      whileInView={{opacity: 1, y: 0}}
      transition={{delay: 0.5}}
    >
      <Image
        src="/images/foto.webp"
        alt="Picture of the author"
        width={250}
        height={250}
        className="rounded-full"
      />
      <div className="flex flex-col gap-3">
        <h3>Debyd Barragán</h3>
        <h1>Desarrollador fullstack</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Eget suspendisse suspendisse dui scelerisque at. Sit et in urna enim tincidunt eu massa cras. Elementum facilisi at faucibus nunc. Accumsan placerat rhoncus nulla volutpat pellentesque laoreet. 
        </p>
        <div className="flex gap-3">
          <a
            href="/files/CV.pdf" 
            download="CV.pdf"
            className="btn bg-gradient-to-r from-indigo-700 to-orange-500"  
          >
            Descargar CV
            <HiDocumentDownload className="text-xl"/>
          </a>
          <Link
            className="btn bg-gradient-to-r from-indigo-700 to-orange-500"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contáctame
            <HiMail className="text-xl"/>
          </Link>
        </div>
      </div>
    </Section>
  )
}