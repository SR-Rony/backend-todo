import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Heading from '../heading/Heading'
import Button from '../button/Button'
import List from '../list/List'
import ListItem from '../list/ListItem'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todos = () => {

    const [inpValue,setInpValue]=useState("")
    const [allTodos,setAllTodos]=useState([])
    const [addButton,setAddButton]=useState(true)
    const [updateId,setUpdateId]=useState("")
    // const [loding,setLoding]=useState(false)


    useEffect(()=>{
        const myTodo = async ()=>{
            // setLoding(true)
           let todos = await axios.get("http://localhost:8000/api/todos")
          setAllTodos(todos.data.data)
        }
        myTodo()
    },[allTodos])

    // add todo button
    const handleAddTodo =async()=>{
        await axios.post("http://localhost:8000/api/todos",{
            todo:inpValue
        })
        .then(()=>{
            console.log("i am todo");
            setInpValue("")
        })
        
    }
    // update todo button
    const handleUpdateTodo = async()=>{
        setAddButton(true)
        await axios.put(`http://localhost:8000/api/todos/${updateId}`,{
            todo:inpValue
        })
        .then(()=>{
            setInpValue("")
        })
    }

    // handle edit todo button
    const handleEdit =(item)=>{
        setAddButton(false)
        setInpValue(item.todo)
        setUpdateId(item._id)
    } 


    // handle delete todo button
    const handleDelete = async(item)=>{
        await axios.delete(`http://localhost:8000/api/todos/${item._id}`)
    }

    



  return (
    <div>
        <Heading className="text-5xl mb-10" tag="h1" text="Welcome to" span="Todo-List"/>
            <input onChange={(e)=>setInpValue(e.target.value)} className='text-xl py-2 px-5 ring-2 ring-primary w-1/2 rounded-lg' value={inpValue} type="text" placeholder='write todo ...' />
            {addButton ?<Button onClick={handleAddTodo} className='mt-5 ml-5' text="Add Todo"/> : <Button onClick={handleUpdateTodo} className='mt-5 ml-5' text="Update"/>}
        <List  className='mt-10 w-1/2 mx-auto '>

            {allTodos.map((item)=>(
                <div key={item._id} className='flex justify-between items-center bg-transparent px-4 py-2 my-4 text-secoundary hover:text-white rounded-lg ring-2 ring-secoundary hover:bg-secoundary'>
                    <ListItem className='font-semibold text-xl' text={item.todo} />
                    <div className='flex gap-4 text-2xl items-center'>
                        <FaEdit onClick={()=>handleEdit(item)}  className='text-green-700 cursor-pointer'/>
                        <MdDelete onClick={()=>handleDelete(item)}  className='text-red-700 cursor-pointer'/>
                    </div>
                </div>
            ))}
            
        </List>
    </div>
  )
}

export default Todos