import React from 'react'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'

function GuestLayout() {
const {token}=useStateContext()
if(token){
    return <Navigate to={'/'}/>
}
    return (
    <div>
        Guest Layout
        <Outlet/>
    </div>
  )
}

export default GuestLayout