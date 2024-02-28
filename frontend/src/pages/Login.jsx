import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import Heading from '../components/heading/Heading';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
  

const Login = () => {
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate()

  const onFinish = async(values) => {
    setLoading(true)
    await axios.post("http://localhost:8000/api/user/login",{
      email:values.email,
      password:values.password
    })
    .then(()=>{
      navigate("/todos")
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err);
      let error=err.response.data.message
      setLoading(false)
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    setLoading(false)
  };


  return (
  <div className=''>
    <Heading className='text-3xl mb-10' tag='h1' text="Get started with easily " span="login"/>
    <Form className='mx-auto w-1/2 pr-32'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {type:"email"}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          {min:6}
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {loading 
      ? <Button type="" className='bg-primary text-white' loading> Loading</Button>
      : <Button className='bg-primary' type="primary" htmlType="submit"> Submit</Button>
      }
      </Form.Item>
    </Form>
    <p>Dont have an acount ? <Link className='text-primary' to='/'>Register</Link></p>
  </div>
  )
}

export default Login