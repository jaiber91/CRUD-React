import {useState, useEffect, createContext} from 'react'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext()

const Authprovider = ({children}) => {
    //almacenando los datos del usuario autenticado
    const [autentication, setAutentication] = useState({})
    
    //verificando si hay un token almacenado
    useEffect(()=>{
        const autUser = async () =>{
            const token = localStorage.getItem('token')
            
            if (!token) {
                return
            }else{
                console.log('abemus token');
                const configuration = {
                    headers: {
                        "Accept": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                try {
                    const {data} = await axios.get ('http://front-test.vinixcode.cloud:8000/api/auth/user-profile', configuration)
                    setAutentication(data)
                } catch (error) {
                    
                }
            }
        }

        autUser()
    }, [])

   
    return(
        
        <AuthContext.Provider
          value={{
            autentication,
            setAutentication
          }}  
        >
            {children}
        </AuthContext.Provider>
    )
}
 
    


export {
    Authprovider
}
export default AuthContext