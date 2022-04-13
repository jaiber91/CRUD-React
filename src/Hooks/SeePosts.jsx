import { useContext } from "react";
import ProviderPost from "../ProviderPost/ProviderPost";

//Creando el hook

const SeePosts = () =>{
    return useContext (ProviderPost)
}

export default SeePosts