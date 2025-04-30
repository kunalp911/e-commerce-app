import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'

const PublicRoute = () => {
  return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
        </Routes>
  )
}

export default PublicRoute