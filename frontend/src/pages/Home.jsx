import React, { useEffect } from 'react'
import Todos from '../components/todos/Todos'
import UserList from '../components/users-list/UserList'
import ActiveUser from '../components/active-user/ActiveUser'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const user = useSelector((state)=>state.user.value)
  let navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      navigate("/login")
    }else{
      navigate("/todos")
    }
  },[])

  return (
    <div className='grid grid-cols-12 gap-3'>
      <div className='col-span-3'>
        <ActiveUser/>
      </div>
      <div className='col-span-6'>
        <Todos/>
      </div>
      <div className='col-span-3'>
        <UserList/>
      </div>

    </div>
  )
}

export default Home