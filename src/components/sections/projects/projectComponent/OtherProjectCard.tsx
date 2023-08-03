import {Project} from "@/components/sections/projects/projectComponent/interfaces";
import Carousel from "@/components/pure/carousel/Carousel";
import {SiGithub} from "react-icons/si";
import {VscLiveShare} from "react-icons/vsc";
import {motion} from "framer-motion";
import {fadeIn} from "@/animations/anim";

type Props = {
    project: Project
}
export default function OtherProjectCard({ project }: Props) {
    return (
        <motion.div className='group relative' {...fadeIn}>
            <a
                href={project.live || project.repository|| '/'}
                target="_blank" rel="noopener noreferrer"
                aria-label='Ver en vivo'
            >
                <Carousel
                    showButtons={false}
                    location={project.imagesLocation}
                    imagesNumber={project.imagesNumber}
                    alt={`${project.name} imagenes`}
                    className='transition ease-out group-hover:opacity-90 dark:group-hover:opacity-60'
                />
                <div className='absolute inset-0 flex-col rounded-2xl justify-center items-center hidden group-hover:flex group-hover:backdrop-blur-sm'>
                    <h4 className='text-2xl'>{project.name}</h4>
                    <div className='flex gap-4 mt-3'>
                        {project.repository && (<a
                            href={project.repository} target="_blank" rel="noopener noreferrer"
                            className='transition ease-out hover:text-indigo-600'
                            aria-label='Repositorio'
                        >
                            <SiGithub size={30} className='cursor-pointer'/>
                        </a>)}
                        {project.live && (
                            <a
                                href={project.live} target="_blank" rel="noopener noreferrer"
                                className='transition ease-out hover:text-indigo-600'
                                aria-label='Ver en vivo'
                            >
                                <VscLiveShare size={30} className='cursor-pointer'/>
                            </a>
                        )}
                    </div>
                </div>
            </a>
        </motion.div>
    )
}