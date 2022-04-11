import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    
    <form className='form'>
      <h3>Login</h3>
        <div className='form-email'>
          <label for='email'>Email</label>
          <input type="email" id='email' placeholder='email@email.com' />
        </div>
        <div className='form-password'>
          <label for='password'>Password</label>
          <input type="password" id='password' placeholder='type your password' />
        </div>
        <input className='form-btn' type="submit" value='Login' />
        <h5>Create an account</h5>
    </form>
    </>
  )
}

export default Login