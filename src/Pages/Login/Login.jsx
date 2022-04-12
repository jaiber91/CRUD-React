import { Link } from "react-router-dom";
import { useState } from "react";
//import axios from "axios";
import './Login.css'
import Error from '../../Components/Error/Error'
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleSubmitLog = (e) =>{
    e.preventDefault();

    
     //Validando que todos los campos no estén vacios
     if ([email, password].includes("")) {
      setError(true);
      console.log("llenar todos los campos");
    } else {
      
      setError(false);
      console.log("campos ok");
      setEmail('')
      setPassword('')
    }

    
}
 








  return (
    <>
    
    <form className='form' onSubmit={handleSubmitLog}>
     {error && <Error message="verify email and password" />}
      <h3>Login</h3>
        <div className='form-email'>
          <label htmlFor='email'>Email</label>
          <input 
          type="email" 
          id='email'
          value={email}
          placeholder='email@email.com' 
          onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className='form-password'>
          <label htmlFor='password'>Password</label>
          <input 
          type="password" 
          id='password' 
          value={password}
          placeholder='type your password' 
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <input className='form-btn' type="submit" value='Login' />
        
        <nav className="form-nav">
          <Link to='/register'>Create an account</Link>
        </nav>
    </form>
    </>
  )
}

export default Login