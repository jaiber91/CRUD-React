import { Link } from "react-router-dom";
import {useState} from 'react'
import './register.css'
import  Error  from '../../Components/Error/Error'
import ErrorPassword from '../../Components/ErrorPassword/ErrorPassword'
import ErrorLength from '../../Components/ErrorLenght/ErrorLength'


const Register = () => {
 //State inicial del form register
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  //Estado para mostrar/ocultar mensaje de error 
  const [error, setError] = useState(false)

  //Estado para validar las contraseñas
  const [errorPass, setErrorPass] = useState(false)

  //Estafo para validar la longitud de la contraseña
  const [errorLength, setErrorLength] = useState (false)

 const handleSubmit = e =>{
  e.preventDefault()

  //Validando que todos los campos no estén vacios
  if ([name, email, password, repeatPassword].includes('')){
   
    setError(true)
      
  }else{
    //quitar mensaje error cuando todos los campos estén llenos
    setError(false) 
  }
  
  //Validando que las contraseña y repetir contraseña sean igual
  if (password !== repeatPassword) {
    console.log('no con iguales');
    setErrorPass(true)
  }else{
    setErrorPass(false)
  }
}




  return (
    <>
    
    <form className='register' onSubmit={handleSubmit}>
      {error && <Error message="Error: all fields are required" /> } 
      {errorPass && <ErrorPassword message="Error: password do not match"/> }
      
      <h3>Create an account</h3>
        <div className='register-name'>
          <label htmlFor="name">Name</label>
          <input  type="text" id='name' placeholder='Jhon Doe' value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className='register-email'>
          <label htmlFor="email">Email</label>
          <input  type="email" id="email"placeholder='correo@correo.com' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='register-password' >
          <label htmlFor="password" >Password</label>
          <input type="password" id='password' placeholder='type your password' value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className='register-RepeatPassword'>
          <label htmlFor='repeat'>Repeat Password</label>
          <input type="password" id="repeat" placeholder='type your password' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}/>
        </div>
        <input className='register-btn' type="submit" value='Create' />
       
        <nav className="register-nav">
          <Link to='/'>Login</Link>
        </nav>
    </form>
    </>
  )
}

export default Register