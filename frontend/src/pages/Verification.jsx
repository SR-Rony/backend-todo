import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Verification = () => {

    const [error,setError]=useState("")

    const param = useParams()
    const navigate = useNavigate()


    useEffect(()=>{

        let token = param.token
        async function verifi (){
        await axios.post("http://localhost:8000/api/user/verify",{
            token:token
        }).then((res)=>{
            console.log(res);
            setTimeout(()=>{
                navigate("/login")
            },2000)
        }).catch((error)=>{
            // console.log(error.response.data.messages);
            let errorMessages = error.response.data.message;

            if(errorMessages.includes("user already exisis")){
                setError("already verify")
            }

            if(errorMessages.includes("expired")){
                setError("expired")
            }
        })
        }
        verifi()
        
    },[])

  return (
    <div>
        <h1 className='text-5xl font-bold'>User Verification is {error ?<span className='text-red-500'>{error}</span> :<span className='text-green-500'>Successfull</span>}</h1>
    </div>
  )
}

export default Verification