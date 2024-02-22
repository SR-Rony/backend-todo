import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Heading from '../heading/Heading'
import Button from '../button/Button'
import List from '../list/List'
import ListItem from '../list/ListItem'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todos = () => {

    const [allTodos,setAllTodos]=useState([])
    const [inpValue,setInpValue]=useState("")

    useEffect(()=>{
        const myTodo = async ()=>{
           let todos = await axios.get("http://localhost:8000/api/todos")
          setAllTodos(todos.data.data)
        }
        myTodo()
    },[allTodos])

    // handle input change
    const handleChange =(e)=>{
        setInpValue(e.target.value)
        
    }

    // add todo button
    const addTodo =async()=>{
        await axios.post("http://localhost:8000/api/todos",{
            todo:inpValue
        })
        
    }


    // handle delete todo button
    const handleDelete = async(item)=>{
        await axios.delete(`http://localhost:8000/api/todos/${item._id}`)
    }



  return (
    <div>
        <Heading className="text-5xl mb-10" tag="h1" text="Welcome to" span="Todo-List"/>
            <input onChange={handleChange} className='text-xl py-2 px-5 ring-2 ring-primary w-1/2 rounded-lg' type="text" placeholder='write todo ...' />
            <Button onClick={addTodo} className='mt-5 ml-5' text="Add Todo"/>
        <List  className='mt-10 w-1/2 mx-auto '>
            {allTodos.map((item)=>(
                <div key={item._id} className='flex justify-between items-center bg-transparent px-4 py-2 my-4 text-secoundary hover:text-white rounded-lg ring-2 ring-secoundary hover:bg-secoundary'>
                    <ListItem className='font-semibold text-2xl' text={item.todo} />
                    <div className='flex gap-4 text-2xl'>
                    {/* <Button className="py-1" text='Edit'/> */}
                    {/* <Button onClick={()=>handleDelete(item)} className=" py-1 ring-2 ring-red-700 ml-5 text-red-700 hover:bg-red-700" text='Delete'/> */}
                        <FaEdit className='text-green-700 cursor-pointer'/>
                        <MdDelete onClick={()=>handleDelete(item)}  className='text-red-700 cursor-pointer'/>
                    </div>
                </div>
            ))}
            
        </List>
    </div>
  )
}

export default Todos