import React from 'react'
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';
import Heading from '../components/heading/Heading';
import { Link } from 'react-router-dom';

const onFinish = async(values) => {
  console.log('Success:', values);
  await axios.post("http://localhost:8000/api/users",{
    name:values.name,
    email:values.email,
    password:values.password
  })
  .then(()=>{
    console.log('user create');
  })
}

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Register = () => {
  return (
   <div className=''>
    <Heading className='text-3xl mb-10' tag='h1' text="Get started with easily " span="register"/>
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
      <Form.Item className=''
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

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
        label="password"
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
    <p>Already have an acount ? <Link className='text-primary' to='/login'>Login</Link></p>
  </div>
  )
}

export default Register