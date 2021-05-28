import React from "react"

import CustomersForm from "@/components/customersForm/CustomersForm"
import Login from "@/components/Buttons/loginButton/Login"

import { useAuth0 } from "@auth0/auth0-react"

const index = () => {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? (
    <div>
      <CustomersForm />
    </div>
  ) : (
    <Login />
  )
}

export default index
