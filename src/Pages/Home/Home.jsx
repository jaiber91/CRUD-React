import React from 'react'
import {Outlet} from 'react-router-dom' //para traer al component hijo desde App: Login
import './Home.css'

const Home = () => {
  return (
    
    <div className='home'>
       
        <Outlet /> 
    </div>
  )
}

export default Home
