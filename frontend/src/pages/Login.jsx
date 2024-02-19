import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import Heading from '../components/heading/Heading';

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
    <Heading className='text-5xl mb-10' tag='h1' text="welcome to " span="Login"/>
    <Form className='mx-auto w-1/2 pr-20'
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
  </div>
  )
}

export default Login