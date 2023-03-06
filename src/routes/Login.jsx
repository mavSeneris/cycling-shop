import React from 'react'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'

export default function Login() {
  return (
    <>
      <Navbar />
      <div className='login-page'>
        <LoginForm />
      </div>
      <Footer />

    </>

  )
}
