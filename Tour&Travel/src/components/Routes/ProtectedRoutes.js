import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router'
function ProtectedRoutes({children}) {
  const {isAuthenticated} = useSelector(state => state.user)
  
  if(!isAuthenticated) return useNavigate('/auth/login')

  return children
}

export default ProtectedRoutes