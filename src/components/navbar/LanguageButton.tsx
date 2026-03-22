import { useLanguage } from '@/context/LanguageContext'
import { HiTranslate } from 'react-icons/hi'

export default function LanguageButton() {
  const { language, setLanguage } = useLanguage()

  const isSpanish = language === 'es'

  return (
    <button
      className='relative'
      onClick={() => setLanguage(isSpanish ? 'en' : 'es')}
      aria-label={isSpanish ? 'Switch to English' : 'Cambiar a espanol'}
      type='button'
    >
      <HiTranslate className='nav-icons active:scale-90'/>
      <span className='absolute -bottom-1 -right-1 rounded bg-indigo-700 px-1 text-[10px] font-semibold leading-4 text-white'>
        {isSpanish ? 'ES' : 'EN'}
      </span>
    </button>
  )
}
