import React from 'react'
import { Routes , Route } from 'react-router-dom'
import User from './Component/User'

function RouteConfig() {
  return (
    <>
      
      <Routes>
        <Route path='/user' element={<User />} />

      </Routes>

    </>
  )
}

export default RouteConfig
