import NeonCard from "../pure/neonCard/NeonCard";
import { cardsData } from "./cards.data"

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center sm:min-h-screen" id="sobre-mi">
      <div className="flex flex-col md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-4/12 gap-6">
        <h2>Sobre mí</h2>
        <p>
          I am a full-stack web developer with experience in React, JavaScript, HTML, CSS, Tailwind, Bootstrap, Laravel, and relational database management with SQL, as well as Agile methodologies. I am capable of developing and maintaining complex web applications using a combination of cutting-edge technologies and proven development practices. Additionally, I am passionate about learning and constantly improving, always seeking to update my skills and expand my knowledge in the field of web development. My strong communication skills and problem-solving abilities make me a valuable team member, able to effectively communicate technical concepts and find creative solutions to challenges.
        </p>
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-3">
          {
            cardsData.map((card, index) => (
              <NeonCard
                key={index}
                {...card}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}