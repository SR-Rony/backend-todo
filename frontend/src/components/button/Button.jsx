import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({text,className}) => {
  return (
    <button className={twMerge("text-primary text-xl font-semibold ring-2 ring-primary bg-transparent py-2 px-5 rounded-lg hover:bg-primary hover:text-white  ",className)}>{text}</button>
  )
}

export default Button