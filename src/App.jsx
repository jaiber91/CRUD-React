import {BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
