import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    
    <form className='form'>
      <h3>Login</h3>
        <div className='form-email'>
          <label>Email</label>
          <input className='' type="email" placeholder='email@email.com' />
        </div>
        <div className='form-password'>
          <label>Password</label>
          <input className='' type="password" placeholder='type your password' />
        </div>
        <input className='form-btn' type="submit" value='Login' />
        <h5>Create an account</h5>
    </form>
    </>
  )
}

export default Login