import axios from 'axios'
import React, { useEffect, useState } from 'react'
import List from '../list/List'
import ListItem from '../list/ListItem'
import Heading from '../heading/Heading'

const UserList = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        const usersFun=async()=>{
            const allUser = await axios.get("http://localhost:8000/api/user")
            setUsers(allUser.data.users);
        }
        usersFun()
    },[])


  return (
    <div className=' px-2'>
        <Heading className="mb-5 text-3xl " tag="h1" span="User List"/>
        <List>
            {users.map((user)=>(
                <div key={user._id}>
                    <ListItem className='p-2 ring-2 font-bold text-secoundary ring-secoundary rounded-md hover:bg-secoundary hover:text-white my-2' text={user.name}/>
                </div>
            ))}
            
        </List>
    </div>
  )
}

export default UserList