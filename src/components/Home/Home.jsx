import React from 'react'
import {Outlet} from 'react-router-dom' //para traer al component hijo desde App: Login

const Home = () => {
  return (
    <>
     <h1>Bienvenido a Home</h1>
    <Outlet /> 
    </>
  )
}

export default Home
