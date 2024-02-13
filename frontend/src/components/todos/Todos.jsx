import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Heading from '../heading/Heading'
import Button from '../button/Button'
import List from '../list/List'
import ListItem from '../list/ListItem'

const Todos = () => {

    // cosnt =[data,setData]=useState([])
    // console.log(data);



//   console.log(data);

    // useEffect(()=>{
    //     myTodo()
    // },[])

    // const myTodo = async ()=>{
    //      axios.get("http://localhost:8000/todos")
    //     await
    // }

    myTodo()


  return (
    <div>
        <Heading className="text-7xl mb-10" tag="h1" text="Welcome to" span="Todo-List"/>
        <form action="">
            <input className='text-2xl py-3 px-5 ring-4 ring-primary w-1/2 rounded-lg' type="text" name='title' placeholder='write todo ...' />
            <Button className='mt-5 ml-5' text="Add Todo"/>
        </form>
        <List  className='mt-10 w-1/2 mx-auto border-t-4 py-5 border-b-4 border-secoundary'>
            <div className='flex justify-between items-center bg-transparent px-4 py-2 my-4 text-secoundary hover:text-white rounded-lg ring-2 ring-secoundary hover:bg-secoundary'>
                <ListItem className='font-semibold text-2xl' text="todo list" />
                <div>
                    <Button className="px-5 py-2 ring-2" text='Edit'/>
                    <Button className="px-5 py-2 ring-2 ring-red-700 ml-5 text-red-700 hover:bg-red-700" text='Delete'/>
                </div>
            </div>
            <div className='flex justify-between items-center bg-transparent px-4 py-2 my-4 text-secoundary hover:text-white rounded-lg ring-2 ring-secoundary hover:bg-secoundary'>
                <ListItem className='font-semibold text-2xl' text="todo list" />
                <div>
                    <Button className="px-5 py-2 ring-2" text='Edit'/>
                    <Button className="px-5 py-2 ring-2 ring-red-700 ml-5 text-red-700 hover:bg-red-700" text='Delete'/>
                </div>
            </div>
        </List>
    </div>
  )
}

export default Todos