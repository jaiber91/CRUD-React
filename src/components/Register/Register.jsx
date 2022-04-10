import React from 'react'
import './register.css'


const Register = () => {
  return (
    <>
    
    <form className='register'>
      <h3>Create an account</h3>
        <div className='register-name'>
          <label for="name">Name</label>
          <input  type="text" id='name' placeholder='Jhon Doe' />
        </div>
        <div className='register-email'>
          <label for="email">Email</label>
          <input  type="email" id="email"placeholder='correo@correo.com' />
        </div>
        <div className='register-password'>
          <label for="password" >Password</label>
          <input type="password" id='password' placeholder='type your password' />
        </div>
        <div className='register-RepeatPassword'>
          <label for='repeat'>Repeat Password</label>
          <input type="password" id="repeat" placeholder='type your password' />
        </div>
        <input className='register-btn' type="submit" value='Create' />
        
    </form>
    </>
  )
}

export default Register