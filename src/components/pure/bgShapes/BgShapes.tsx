import React from 'react'
import classNames from 'classnames';

type Props = {
  className?: string
}

export default function BgShapes({
  className
}: Props) {
  const shapeClasses = classNames(
    'absolute rounded-full -z-10 mix-blend-multiply filter blur-3xl opacity-50 dark:opcaity-70',
    className
  )

  return (
    <div
      className={shapeClasses}
    />
  )
}