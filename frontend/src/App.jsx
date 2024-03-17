import React from 'react'
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root-layout/Root';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verification from './pages/Verification';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path='/' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/todos' element={<Home />}/>
        <Route path='/forgot_password' element={<ForgotPassword />}/>
        <Route path='/verification/:token' element={<Verification />}/>
        <Route path='/newpassword/:token' element={<NewPassword />}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
