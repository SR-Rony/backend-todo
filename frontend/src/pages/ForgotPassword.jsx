import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';


const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);


    const onFinish = async(values) => {
        console.log(values);
        // setLoading(true)
        // await axios.post("http://localhost:8000/api/user/login",{
        //   email:values.email,
        //   password:values.password
        // })
        // .then(()=>{
        //   users.map((item)=>{
        //     if(item.email==values.email){
        //       let user={
        //         name:item.name,
        //         email:item.email,
        //         password:item.password
        //       }
        //       dispatch(activeUser(user))
        //       localStorage.setItem("user",JSON.stringify(user))
        //       navigate("/todos")
        //       setLoading(false)
        //     }
        //   })
          
        // })
        // .catch((err)=>{
        //   let error=err.response.data.message
        //   setLoading(false)
        //   toast.error(error, {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        //     });
        // })
      };
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
        label="inter your email"
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

export default ForgotPassword