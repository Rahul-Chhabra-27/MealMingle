import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import EmailLogin from './components/EmailLogin'
import Main from './components/Main'
import Menu from './components/Menu'
import Order from './components/Order'
import Payment from './components/Payment'
import PaymentSuccessful from './components/PaymentSuccessful'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/emailLogin' element={<EmailLogin />} />
        <Route path='/main' element={<Main />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/order' element={<Order />} />
        <Route path='/payment' element={<Payment />} />
        <Route path="/payment-successful" element={<PaymentSuccessful />} />
      </Routes>
    </>
  )
}

export default App