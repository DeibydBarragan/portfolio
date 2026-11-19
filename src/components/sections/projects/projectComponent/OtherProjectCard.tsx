import {Project} from "@/components/sections/projects/projectComponent/interfaces";
import Carousel from "@/components/pure/carousel/Carousel";
import {SiGithub} from "react-icons/si";
import {VscLiveShare} from "react-icons/vsc";
import {motion} from "framer-motion";
import {fadeIn} from "@/animations/anim";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
    project: Project
}
export default function OtherProjectCard({ project }: Props) {
    const { language } = useLanguage()

    return (
        <motion.div className='group relative rounded-2xl border shadow-sm dark:border-none' {...fadeIn}>
            <a
                href={project.live || project.repository|| '/'}
                target="_blank" rel="noopener noreferrer"
                aria-label={project.name}
            >
                <Carousel
                    showButtons={false}
                    location={project.imagesLocation}
                    imagesNumber={project.imagesNumber}
                    alt={language === 'es' ? `${project.name} imagenes` : `${project.name} images`}
                    className='transition ease-out group-hover:opacity-90 dark:group-hover:opacity-60'
                />
            </a>
            <div className='pointer-events-none absolute inset-0 hidden flex-col items-center justify-center rounded-2xl group-hover:flex group-hover:backdrop-blur-sm group-focus-within:flex group-focus-within:backdrop-blur-sm'>
                <h4 className='text-2xl'>{project.name}</h4>
                <div className='flex gap-4 mt-3'>
                    {project.repository && (
                        <a
                            href={project.repository} target="_blank" rel="noopener noreferrer"
                            className='pointer-events-auto transition ease-out hover:text-indigo-600'
                            aria-label={language === 'es' ? 'Repositorio' : 'Repository'}
                        >
                            <SiGithub size={30} className='cursor-pointer'/>
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live} target="_blank" rel="noopener noreferrer"
                            className='pointer-events-auto transition ease-out hover:text-indigo-600'
                            aria-label={language === 'es' ? 'Ver en vivo' : 'Live demo'}
                        >
                            <VscLiveShare size={30} className='cursor-pointer'/>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
