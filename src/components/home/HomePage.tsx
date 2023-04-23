import Image from "next/image"
import { HiDocumentDownload, HiMail } from "react-icons/hi"
import { Link } from "react-scroll"

export default function HomePage() {
  return (
    <main className="md:h-screen mt-4 md:mt-0 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center w-auto md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 gap-6">
        <Image
          src="/images/foto.png"
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
              className="btn"  
            >
              Descargar CV
              <HiDocumentDownload className="text-xl"/>
            </a>
            <Link
              className="btn"
              to="contact"
            >
              Contáctame
              <HiMail className="text-xl"/>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}