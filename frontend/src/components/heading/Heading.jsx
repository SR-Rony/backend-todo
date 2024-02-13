import React from 'react'

const Heading = (props) => {
 const {text,className,span}=props
  return (
    <props.tag className={`text-secoundary font-bold ${className}`}>{text} <span className='text-primary'>{span}</span></props.tag>
  )
}

export default Heading