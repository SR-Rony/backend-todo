import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import Heading from '../components/heading/Heading';
import { Link } from 'react-router-dom';

  const onFinish = async(values) => {
    console.log('Success:', values);
    await axios.post("http://localhost:8000/api/login",{
      email:values.email,
      passsword:values.passsword
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const Login = () => {
  useEffect(()=>{
   async function user(){
      const data= await axios.get("http://localhost:8000/api/login")
      console.log(data);
    }
  },[])


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
        <Button className='bg-primary' type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <p>Dont have an acount ? <Link className='text-primary' to='/'>Register</Link></p>
  </div>
  )
}

export default Login