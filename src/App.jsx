import {BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Posts from './Pages/Posts/Posts'
import AddPost from './Pages/AddPost/AddPost'


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        
      </Route>
      {/* Las siguientes rutas deben funcionar solo cuando se loguea el usuario*/}
      
      <Route path='posts' element={<Posts/>} />
      <Route path='addpost' element={<AddPost/>}/>
        
      
     
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
