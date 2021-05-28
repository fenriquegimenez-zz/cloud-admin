import React from "react"
import CustomersList from "@/components/customersList/CustomersList"
import Login from "@/components/Buttons/loginButton/Login"

import { useAuth0 } from "@auth0/auth0-react"

const index = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated ? <CustomersList /> : <Login />
}

export default index
