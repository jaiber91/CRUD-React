import { useContext } from "react";
import ProviderPost from "../ProviderPost/ProviderPost";

//Creando el hook y llamando al provider

const SeePosts = () =>{
    return useContext (ProviderPost)
}

export default SeePosts