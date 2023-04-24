import React from 'react'
import { HiCode } from 'react-icons/hi'

type Props = {}

export default function Education({}: Props) {
  return (
    <section className='md:h-screen flex flex-col  md:items-center' id='educacion'>
      <div className='flex flex-col md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-4/12 gap-6'>
        <h2>Educación</h2>
          <ul className='list-inside border-l-2 pl-4 border-solid border-gradient shadow-left relative'>
            <li className='flex items-center'>
              <HiCode className='text-2xl bg-white dark:bg-black absolute'/>
              <p>
                Técnico en programación de software en formación(3er trimestre)
                <br/>Servicio Nacional de Aprendizaje (SENA)
                <br/>Centro de Materiales y Ensayos
                <br/>En proceso de certificación
              </p>
            </li>
            <li>
              Técnico en programación de software en formación(3er trimestre)
              <br/>Servicio Nacional de Aprendizaje (SENA)
              <br/>Centro de Materiales y Ensayos
            </li>
          </ul>
        <h2>Experiencia</h2>
      </div>
    </section>
  )
}