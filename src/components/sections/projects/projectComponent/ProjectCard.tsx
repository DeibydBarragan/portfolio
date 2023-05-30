import Image from 'next/image'
import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiPhp, SiNodedotjs, SiExpress, SiLaravel, SiMysql, SiFirebase, SiReact, SiTailwindcss,SiBootstrap, SiNextdotjs, SiChakraui, SiGit, SiGithub, SiFigma, SiNpm, SiVisualstudiocode, SiNotion} from "react-icons/si"
import { MdPlaylistAddCheckCircle } from 'react-icons/md'
import { VscLiveShare } from 'react-icons/vsc'
import { useState } from 'react'
import Modal from '@/components/pure/modal/Modal'
import { Dialog } from '@headlessui/react'
import Carousel from '@/components/pure/carousel/Carousel'

type Props = {}

export default function ProjectCard({}: Props) {
  const [IsOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='flex gap-8 w-full flex-wrap sm:flex-nowrap'>
        <div className='relative rounded w-full  sm:w-8/12 h-60'>
          <Carousel
            showButtons={false}
            images={['todo1',
            'todo2',
            'todo3',
            'todo4',
            'todo5',
            'todo6',
            'todo7',
            'todo8',
            'todo9',
            'todo10',
            'todo11',]}
          />
          <div className='absolute bottom-0 p-2 w-full z-10 flex justify-between items-center bg-black/20 backdrop-blur-sm rounded-b-2xl text-white'>
            <div className="flex gap-3 items-center">
              <MdPlaylistAddCheckCircle
                size={43}
              />
                <h4>To-Do List</h4>
            </div>
            <div className="flex flex-end gap-3">
              <button 
                className="btn-primary"
                aria-label='Repositorio'  
              >
                <span className="hidden sm:block">
                  Repositorio
                </span>
                <SiGithub size={25} className="sm:hidden"/>
              </button>
              <button
                className="btn-primary"
                aria-label='Ver en vivo'  
              >
                <span className="hidden sm:block">
                  Ver en vivo
                </span>
                <VscLiveShare size={25} className="sm:hidden"/>
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:w-4/12 gap-2 justify-between'>
          <h3 className='text-indigo-700'>To-Do List</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis faucibus maecenas felis at montes eget.
          </p>
          <div className='flex gap-3 text-4xl'>
            <SiReact className='text-blue-500'/>
            <SiTailwindcss className='text-sky-500'/>
            <SiFirebase className="text-yellow-500"/>
          </div>
          <button
            className='btn-gradient flex-end'
            onClick={() => setIsOpen(true)}
          >
            Más información
          </button>
        </div>
      </div>
      <Modal isOpen={IsOpen} setIsOpen={setIsOpen}>
        <Dialog.Title
          as="h3"
          className="text-2xl font-medium mb-4"
        >
          To-Do List
        </Dialog.Title>
        {/**Carrousel */}
        <Carousel
          images={['todo1',
          'todo2',
          'todo3',
          'todo4',
          'todo5',
          'todo6',
          'todo7',
          'todo8',
          'todo9',
          'todo10',
          'todo11',]}
        />
        <div className="flex flex-col gap-3 mt-2">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Lacus placerat ornare nunc sapien maecenas nibh suscipit eu. Dui ipsum pretium in eu morbi eget nibh pretium. Habitant lectus egestas at volutpat mauris vitae consectetur sit.
          </p>
          <h4>Lenguajes y tecnologías usados</h4>
          <div className="flex gap-3 text-4xl">
            <SiJavascript className="text-yellow-500"/>
            <SiTailwindcss className=''/>
            <SiFirebase/>
            <SiHtml5/>
          </div>
          <h4>¿Qué aprendí?</h4>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Lacus placerat ornare nunc sapien maecenas nibh suscipit eu. Dui ipsum pretium in eu morbi eget nibh pretium. Habitant lectus egestas at volutpat mauris vitae consectetur sit.
          </p>
        </div>

        <div className="flex w-full justify-end gap-4 mt-4">
          <button
            className="btn-primary"
            aria-label="Repositorio"
          >
            Repositorio
          </button>
          <button
            className="btn-primary"
            aria-label="Ver en vivo"
          >
            Ver en vivo
          </button>
        </div>
      </Modal>
    </>
  )
}