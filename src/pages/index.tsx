import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

import Login from "@/components/loginButton/Login"
import UserProfile from "@/components/profile/UserProfile"

const index = () => {
  const { isAuthenticated } = useAuth0()
  return <>{isAuthenticated ? <UserProfile /> : <Login />}</>
}

export default index
