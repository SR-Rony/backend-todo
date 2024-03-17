import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';


const NewPassword = () => {
    const [loading, setLoading] = useState(false);

    const params = useParams()
    const navigate = useNavigate()


    const onFinish = async(values) => {
        // console.log(values);
        setLoading(true)
        await axios.post("http://localhost:8000/api/user/update_password",{
          password:values.password,
          token:params.token
        })
        .then((res)=>{
            setLoading(false)
          toast.success(res.data.message, {
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
        .then(()=>{
            navigate("/login")
        })
        .catch((err)=>{
            setLoading(false)
            toast.error ("password reset expired",{
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
      }
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // setLoading(false)
      };




  return (
    <>
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
        label="password"
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
    </>
  )
}

export default NewPassword