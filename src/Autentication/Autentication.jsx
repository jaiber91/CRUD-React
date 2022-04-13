import {useState, useEffect, createContext} from 'react'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext()

const Authprovider = ({children}) => {
    //almacenando los datos del usuario autenticado
    const [autentication, setAutentication] = useState({})
    
    const [charging, setCharging] = useState(true)

    //verificando si hay un token almacenado
    useEffect(()=>{
        const autUser = async () =>{
            const token = localStorage.getItem('token')
            
            if (!token) {
                setCharging(false)
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
                setCharging(false)
            }
        }

        autUser()
    }, [])

   
    return(
        
        <AuthContext.Provider
          value={{
            autentication,
            setAutentication,
            charging
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