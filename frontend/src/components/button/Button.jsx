import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({text,className}) => {
  return (
    <button className={twMerge("text-primary text-2xl font-semibold ring-4 ring-primary bg-transparent py-3 px-5 rounded-lg hover:bg-primary hover:text-white  ",className)}>{text}</button>
  )
}

export default Button