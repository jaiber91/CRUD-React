import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './Login.css'
import Error from '../../Components/Error/Error'
import Aut from "../../Hooks/Auth";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
   
  //Llamando a 
  const {setAutentication} = Aut()
  

  const handleSubmitLog = async (e) =>{
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
    //Petición API
    try {
      const response = await axios.post(
        " http://front-test.vinixcode.cloud:8000/api/auth/login",
        {  email, password},
        { header: "Accept: application/json" }
      );
      console.log(response);
      localStorage.setItem('token', response.data.access_token)
      setAutentication(response)
    } catch (error) {
      console.log(error);
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