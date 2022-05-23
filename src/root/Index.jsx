import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Index'
import { navbar } from '../utils/navbar'
import { Container } from './style'

export default function Root() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route element={<Navbar />}>
          {navbar.map(({ Element, id, path }) =>{
            return <Route key={id} path={path} element={Element}/>
          }

)}
        </Route>

      </Routes>
    </>
  )
}
