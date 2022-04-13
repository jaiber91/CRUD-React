import axios from 'axios'
import {useState, useEffect, createContext} from 'react'
import {useNavigate} from 'react-router-dom'
const ContextPost = createContext()



const ProviderPost = ({children}) =>{
    const [Publicposts, setPublicposts] = useState([])

    //redireccionando a la vista de post conservación del token 
    const navigation = useNavigate()
    
    useEffect(()=>{
        const getPosts = async () => {
            try {
                
               const {data} = await axios.get('https://reqres.in/api/users?page=2')
                //pasando la data al state
               setPublicposts(data);

            } catch (error) {
                console.log(error);
            }
        }
        getPosts()
    }, [])


    const submitPostAdd = async postsAdd =>{
        try {
            //Verificando la existencia del token
            const token = localStorage.getItem('token')
            if (!token) {
                return
            }

            /*const config ={
                headers: {
                    "Accept": "application/json",
                    Authorization: `Bearer ${token}`
                }

            }*/
            const {data} = await 
            axios.post('https://reqres.in/api/users', postsAdd,
            
            
            )
            console.log(data);
            
            //redireccionando a la nueva vista
            navigation('/posts')
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <ContextPost.Provider
            value={{
                Publicposts,
                submitPostAdd
            }}
        >{children}

        </ContextPost.Provider>
    )
}
export {
    ProviderPost
}
export default ContextPost