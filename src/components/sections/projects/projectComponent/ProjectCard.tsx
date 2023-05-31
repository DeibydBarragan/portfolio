import Image from 'next/image'
import { HiOutlineSelector } from 'react-icons/hi'
import { MdPlaylistAddCheckCircle } from 'react-icons/md'
import { VscLiveShare } from 'react-icons/vsc'
import { useState } from 'react'
import Modal from '@/components/pure/modal/Modal'
import { Dialog, Listbox } from '@headlessui/react'
import Carousel from '@/components/pure/carousel/Carousel'
import { Project } from './interfaces'
import { motion } from 'framer-motion';
import Tooltip from '@/components/pure/tooltip/Tooltip'
import { SiGithub } from 'react-icons/si'

type Props = {
  project: Project
  index: number
}

export default function ProjectCard({index, project}: Props) {
  const [IsOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div className={`flex flex-col sm:flex-row gap-6 ${index % 2 !== 0 && 'sm:flex-row-reverse'}`}
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 0.3 * index,
        }}
      >
        <div className='relative rounded w-full  sm:w-8/12 h-60'>
          <Carousel
            showButtons={false}
            images={project.images}
          />
          <div className='absolute bottom-0 p-2 w-full z-10 flex justify-between items-center bg-black/20 backdrop-blur-sm rounded-b-2xl text-white'>
            <div className="flex gap-3 items-center">
              <MdPlaylistAddCheckCircle
                size={43}
              />
                <h4>{project.name}</h4>
            </div>
            <div className="flex flex-end gap-3">
              <a href={project.repository} target="_blank" rel="noopener noreferrer"
                className="btn-primary"
                aria-label='Repositorio'  
              >
                <span className="hidden sm:block">
                  Repositorio
                </span>
                <SiGithub size={25} className="sm:hidden"/>
              </a>
              <a
                href={project.live} target="_blank" rel="noopener noreferrer"
                className="btn-primary"
                aria-label='Ver en vivo'  
              >
                <span className="hidden sm:block">
                  Ver en vivo
                </span>
                <VscLiveShare size={25} className="sm:hidden"/>
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:w-4/12 gap-2 justify-between'>
          <h3 className='text-indigo-700'>{project.name}</h3>
          <p className='text-sm text-gray-800 dark:text-gray-300'>
            {project.shortDescription}
          </p>
          <div className='flex gap-3 text-4xl'>
            {project.technologies.map((technology, index) => (
              <Tooltip
                key={`${technology.name}0-${index}`}
                description={`${technology.name} ${technology.version}`}
              >
                {technology.icon}
              </Tooltip>
            ))}
          </div>
          <button
            className='btn-gradient flex-end'
            onClick={() => setIsOpen(true)}
          >
            Más información
          </button>
        </div>
      </motion.div>
      <Modal isOpen={IsOpen} setIsOpen={setIsOpen}>
        <Dialog.Title
          as="h3"
          className="text-2xl font-medium mb-4"
        >
          {project.name}
        </Dialog.Title>
        {/**Carrousel */}
        <Carousel
          images={project.images}
        />
        <div className="flex flex-col gap-3 mt-2">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {project.longDescription}
          </p>
          <h4>Lenguajes y tecnologías usados</h4>
          <div className="flex gap-3 text-4xl">
            {project.technologies.map((technology) => (
              <Tooltip
                key={`${technology.name}-${index}`}
                description={`${technology.name} ${technology.version}`}
              >
                {technology.icon}
              </Tooltip>
            ))}
            {project.languages.map((language) => (
              <Tooltip
                key={`${language.name}-${index}`}
                description={`${language.name} ${language.version}`}
              >
                {language.icon}
              </Tooltip>
            ))}
          </div>
          <Listbox as='div' className="relative">
            <Listbox.Button className="rounded-lg flex justify-between items-center py-2 px-3 w-full active:scale-95 transition ease-in-out bg-gray-200 dark:bg-zinc-800">
              <h4 className="text-sm sm:text-base">Librerías y herramientas usadas</h4>
              <HiOutlineSelector size={25}/>
            </Listbox.Button>
            <Listbox.Options 
              className="absolute mt-2 text-sm text-gray-700 dark:text-gray-300 w-full bg-white dark:bg-zinc-800 rounded-lg px-3 border border-gray-300 dark:border-none shadow-lg divide-y dark:divide-zinc-700 flex flex-col"
              as={motion.div}
              initial={{
                opacity:0,
                y:-10
              }}
              animate={{
                opacity:1,
                y:0
              }}
            >
              {project.mainLibraries.map((library) => (
                <Listbox.Option
                  key={`${library}-${index}`}
                  value={library}
                  disabled
                  className="py-3"
                >
                  {library}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
          <h4>¿Qué aprendí?</h4>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {project.learned}
          </p>
          
        </div>
        <div className="flex w-full justify-end gap-4 mt-4">
          <a href={project.repository} target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Repositorio"
          >
            Repositorio
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Ver en vivo"
          >
            Ver en vivo
          </a>
        </div>
      </Modal>
    </>
  )
}