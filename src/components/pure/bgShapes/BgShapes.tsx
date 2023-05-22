import React from 'react'
import classNames from 'classnames';

type Props = {
  className?: string
}

export default function BgShapes({
  className
}: Props) {
  const shapeClasses = classNames(
    'absolute rounded-full -z-10 mix-blend-multiply filter blur-xl opacity-70 animate-blob',
    className
  )

  return (
    <div
      className={shapeClasses}
    />
  )
}