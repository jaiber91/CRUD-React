import { useContext } from "react";
import AuthContext from "../Autentication/Autentication";

const Aut =()=>{
    //llamando los valores del context, creado en el componente
    return useContext(AuthContext)
}

export default Aut