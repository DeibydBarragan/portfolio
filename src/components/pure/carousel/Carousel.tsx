import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion } from 'framer-motion';

type Props = {
  images: string[]
  showButtons?: boolean
}

export default function Carousel({images, showButtons = true}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const onLeft = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const onRight = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      onRight()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <div className="flex justify-center items-center overflow-hidden relative">
      {showButtons && (
        <>
          <button className="absolute left-0 text-gray-200 hover:text-gray-300 text-4xl transition ease-in-out z-10" onClick={onLeft}>
            <HiChevronLeft/>
          </button>
          <button className="absolute right-0 text-gray-200 hover:text-gray-300 text-4xl transition ease-in-out z-10" onClick={onRight}>
            <HiChevronRight/>
          </button>
        </>
      )}
      <div className="w-full h-60">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            initial={{
              opacity: currentSlide === index ? 1 : 0,
            }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            }}
          >
            <Image
              src={`/images/${image}.png`}
              alt='Nombre de projecto'
              width={1280}
              height={720}
              quality={90}
              className='w-full h-full object-cover rounded-2xl'
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}