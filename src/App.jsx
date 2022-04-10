import {BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Posts from './components/Posts/Posts'
import ReadPost from './components/ReadPost/ReadPost'


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        
      </Route>
      {/* Las siguientes rutas deben funcionar solo cuando se loguea el usuario*/}
      
      <Route path='posts' element={<Posts/>}>
        <Route path='readPost' element={<ReadPost/>}/>
        
      </Route>
     
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
