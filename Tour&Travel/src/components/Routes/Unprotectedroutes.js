import React from 'react'
import { useSelector } from 'react-redux';

import { Navigate,Outlet, useNavigate } from "react-router-dom";

function UnprotectedRoutes({children}) {
  const {isAuthenticated} = useSelector(state => state.user)
  if(isAuthenticated) return useNavigate(-1)
  return children
}

export default UnprotectedRoutes