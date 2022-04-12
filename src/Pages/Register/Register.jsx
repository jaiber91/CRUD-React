import { Link } from "react-router-dom";
import { useState } from "react";
import "./register.css";
import Error from "../../Components/Error/Error";
import ErrorPassword from "../../Components/ErrorPassword/ErrorPassword";
import axios from "axios";

const Register = () => {
  //State inicial del form register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");

  //Estado para mostrar/ocultar mensaje de error
  const [error, setError] = useState(false);

  //Estado para validar las contraseñas
  const [errorPass, setErrorPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validando que todos los campos no estén vacios
    if ([name, email, password, password_confirmation].includes("")) {
      setError(true);
    } else {
      //quitar mensaje error cuando todos los campos estén llenos
      setError(false);

      //Minimo de contraseña
      if (password.length < 6) {
        console.log('minimo 6 caracterés');
        return
      }

      //Validando que las contraseña y repetir contraseña sean igual
      if (password !== password_confirmation) {
        console.log("no con iguales");
        return ( setErrorPass(true))
       
      } else {
        setErrorPass(false);
      }

     
        //Petición API
      try {
        const response = await axios.post(
          " http://front-test.vinixcode.cloud:8000/api/auth/register",
          { name, email, password, password_confirmation },
          { header: "Accept: application/json" }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    setName ('')
    setEmail('')
    setPassword('')
    setpassword_confirmation('')
    
    //Creando usuarios en la API
    
      /*const url = 'http://front-test.vinixcode.cloud:8000/api/auth/register'

  fetch(
    url, 
    {method: "POST",
    headers: {
    "Content-Type": "application/json"}, 
    body: JSON.stringify({ name, email, password, password_confirmation})
  })
  
  .then(response => response.json())
  .then(data => console.log(data));*/
    

    
  };

  return (
    <>
      <form className="register" onSubmit={handleSubmit}>
        {error && <Error message="Error: all fields are required" />}
        {errorPass && <ErrorPassword message="Error: password do not match" />}

        <h3>Create an account</h3>
        <div className="register-name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Jhon Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="register-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="correo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register-password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="register-RepeatPassword">
          <label htmlFor="repeat">Repeat Password</label>
          <input
            type="password"
            id="repeat"
            placeholder="type your password"
            value={password_confirmation}
            onChange={(e) => setpassword_confirmation(e.target.value)}
          />
        </div>
        <input className="register-btn" type="submit" value="Create" />

        <nav className="register-nav">
          <Link to="/">Login</Link>
        </nav>
      </form>
    </>
  );
};

export default Register;
