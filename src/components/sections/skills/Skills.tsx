import SkillCard from "./skillCard/SkillCard"

type Props = {}

export default function Skills({}: Props) {
  return (
    <div
      className="section lg:w-10/12 xl:w-8/12 2xl:w-6/12"
      id="skills"
    >
      <h2>Habilidades</h2>
      <p>Tecnologías con las que he trabajado</p>
      <h3>Lenguajes de programación</h3>
      <div className="grid grid-cols-2 xl:grid-cols-6 gap-4">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        
      </div>
      <h3>Frameworks frontend</h3>
      <div className="bg-indigo-700 flex flex-wrap">
      </div>
      <h3>Frameworks backend</h3>
      <div className="bg-gray-500 flex flex-wrap">
      </div>
      <h3>Herramientas</h3>
      <div className="bg-white flex flex-wrap">
      </div>
    </div>
  )
}