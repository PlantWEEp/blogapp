import React, { useState } from 'react'
import Login from './Login'

function Auth() {
    const[auth, setAuth] =useState(false)
  return (
    <>
    <Login/>
    </>
  )
}

export default Auth