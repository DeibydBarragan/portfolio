import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()

  return (
    <div
      className="flex justify-center items-center h-16 text-gray-400 gap-2 mt-"
    >
      {language === 'es' ? 'Creado por' : 'Created by'}  
      <a className="text-indigo-500 hover:text-indigo-600 transition ease-in-out duration-200"
        href='https://github.com/DeibydBarragan' target='_blank'>
        Deibyd Barragán
      </a> 
    </div>
  )
}
