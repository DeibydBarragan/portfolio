import { HiCode, HiOutlineChatAlt2, HiOutlineTrendingUp, HiPuzzle, HiSpeakerphone, HiUserGroup } from 'react-icons/hi';
import { Language } from '@/context/LanguageContext';

export const getCardsData = (language: Language) => {
  if (language === 'en') {
    return [
      {
        description: 'Self-taught',
        icon: <HiCode className='text-indigo-600'/>
      },
      {
        description: 'English level B2',
        icon: <HiOutlineChatAlt2 className='text-violet-900'/>
      },
      {
        description: 'Communication',
        icon: <HiSpeakerphone className='text-sky-500'/>
      },
      {
        description: 'Problem solving',
        icon: <HiPuzzle className='text-red-500'/>
      },
      {
        description: 'Teamwork',
        icon: <HiUserGroup className='text-pink-700'/>
      },
      {
        description: 'Responsibility',
        icon: <HiOutlineTrendingUp className='text-emerald-600'/>
      },
    ]
  }

  return [
    {
      description: 'Autodidacta',
      icon: <HiCode className='text-indigo-600'/>
    },
    {
      description: 'Nivel de ingles B2',
      icon: <HiOutlineChatAlt2 className='text-violet-900'/>
    },
    {
      description: 'Comunicacion',
      icon: <HiSpeakerphone className='text-sky-500'/>
    },
    {
      description: 'Resolucion de problemas',
      icon: <HiPuzzle className='text-red-500'/>
    },
    {
      description: 'Trabajo en equipo',
      icon: <HiUserGroup className='text-pink-700'/>
    },
    {
      description: 'Responsabilidad',
      icon: <HiOutlineTrendingUp className='text-emerald-600'/>
    },
  ]
}