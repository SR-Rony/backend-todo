import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Heading from '../heading/Heading'
import Button from '../button/Button'
import List from '../list/List'
import ListItem from '../list/ListItem'

const Todos = () => {

    const [allTodos,setAllTodos]  =useState([])

    useEffect(()=>{
        const myTodo = async ()=>{
           let todos = await axios.get("http://localhost:8000/todos")
          setAllTodos(todos.data.data)
        }
        myTodo()
    },[])



  return (
    <div>
        <Heading className="text-5xl mb-10" tag="h1" text="Welcome to" span="Todo-List"/>
        <form action="">
            <input className='text-xl py-2 px-5 ring-2 ring-primary w-1/2 rounded-lg' type="text" name='title' placeholder='write todo ...' />
            <Button className='mt-5 ml-5' text="Add Todo"/>
        </form>
        <List  className='mt-10 w-1/2 mx-auto border-t-4 py-5 border-b-4 border-secoundary'>
            {allTodos.map((item)=>(
                <div key={item._id} className='flex justify-between items-center bg-transparent px-4 py-2 my-4 text-secoundary hover:text-white rounded-lg ring-2 ring-secoundary hover:bg-secoundary'>
                    <ListItem className='font-semibold text-2xl' text={item.todo} />
                    <div>
                    <Button className="py-1" text='Edit'/>
                    <Button className=" py-1 ring-2 ring-red-700 ml-5 text-red-700 hover:bg-red-700" text='Delete'/>
                    </div>
                </div>
            ))}
            
        </List>
    </div>
  )
}

export default Todos