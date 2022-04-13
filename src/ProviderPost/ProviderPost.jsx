import axios from 'axios'
import {useState, useEffect, createContext} from 'react'

const ContextPost = createContext()



const ProviderPost = ({children}) =>{
    const [Publicposts, setPublicposts] = useState([])




    return(
        <ContextPost.Provider
            value={{
                Publicposts
            }}
        >{children}

        </ContextPost.Provider>
    )
}
export {
    ProviderPost
}
export default ContextPost