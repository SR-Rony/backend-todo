import React from 'react'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import Button from '../button/Button'

const ActiveUser = () => {
  return (
    <div className='bg-secoundary w-full h-[90vh] p-2 grid grid-rows-12 rounded-md '>
        <div className='row-span-10'>
            <Heading className="text-3xl border-b border-primary pb-2" tag="h2" span="Active User"/>
            <div className='ring ring-primary rounded-full w-28 h-28 mx-auto my-4'>

            </div>
            <Paragraph className="text-white text-2xl font-bold mb-5" text="User Name"/>
        </div>
        <div className='row-span-2'>
            <Button text="Logout"/>
        </div>
    </div>
  )
}

export default ActiveUser