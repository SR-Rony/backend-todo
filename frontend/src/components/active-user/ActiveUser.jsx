import React from 'react'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { activeUser } from '../../fetures/users/userSlice'
import { useNavigate } from 'react-router-dom'

const ActiveUser = () => {

  const user = useSelector((state)=>(state.user.value))
  let dispatch = useDispatch()
  let navigate = useNavigate()

    const handleLogout =()=>{
      localStorage.removeItem('user')
      dispatch(activeUser(null))
      navigate("/login")
    }

  return (
    <div className='bg-secoundary w-full h-[90vh] p-2 grid grid-rows-12 rounded-md '>
        <div className='row-span-10'>
            <Heading className="text-3xl border-b border-primary pb-2" tag="h2" span="Active User"/>
            <div className='ring ring-primary rounded-full w-28 h-28 mx-auto my-4'>

            </div>
            <Paragraph className="text-white text-2xl font-bold mb-5" text={user.name}/>
        </div>
        <div className='row-span-2'>
            <Button onClick={handleLogout} text="Logout"/>
        </div>
    </div>
  )
}

export default ActiveUser