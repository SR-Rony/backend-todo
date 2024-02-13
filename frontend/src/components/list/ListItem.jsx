import React from 'react'

const ListItem = ({className,text}) => {
  return (
    <li className={className}>{text}</li>
  )
}

export default ListItem