import { Outlet, Navigate } from "react-router-dom"
import Aut from "../../Hooks/Auth"

const SecureRute = () => {
    const {autentication, charging} = Aut()
   
    if (charging) {
        return 'cargando...'
    }
    return (
    <>
    {autentication.id ? <Outlet/>: <Navigate to='/' />}
    </>
  )
}

export default SecureRute