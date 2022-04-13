import { Outlet, Navigate } from "react-router-dom"
import Aut from "../../Hooks/Auth"

const SecureRute = () => {
    const {autentication} = Aut()
   console.log(autentication);
    return (
    <>
    {/*autentication.id ? 'Autenticar': <Navigate to='/' />*/}
    </>
  )
}

export default SecureRute