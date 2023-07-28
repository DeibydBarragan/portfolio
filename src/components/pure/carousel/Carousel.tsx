import { numberToStringArray } from '@/utils/utils'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

type Props = {
  location: string
  imagesNumber: number
  showButtons?: boolean
}

export default function Carousel({location, imagesNumber, showButtons = true}: Props) {
  const images = numberToStringArray(imagesNumber)
  const [currentSlide, setCurrentSlide] = useState(0)

  const onLeft = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const onRight = useCallback(() => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }, [currentSlide, images.length])

  useEffect(() => {
    const interval = setInterval(() => {
      onRight()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide, onRight])

  return (
    <div className="flex w-full justify-center items-center relative">
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
        {images.map((image, index) => (
            <Image
              key={index}
              src={`/images/${location}/${image}.webp`}
              alt='Nombre de projecto'
              width={1280}
              height={720}
              quality={90}
              className={`w-full h-auto rounded-2xl transition ease-in-out duration-300 ${index === currentSlide ? 'opacity-100' : 'absolute opacity-0'}`}
            />
        ))}
    </div>
  )
}