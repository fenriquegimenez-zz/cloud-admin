import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

import Login from "@/components/Buttons/loginButton/Login"
import UserProfile from "@/components/profile/UserProfile"

const index = () => {
  const { isAuthenticated } = useAuth0()
  return (
    <>
      <h2>Cloud Admin</h2>
      <br />
      <p>
        Cloud admin es una herramienta de gestión de clientes y cobranzas,
        construida con un stack de tecnologías web de última generación.
      </p>
      <br />
      {isAuthenticated ? (
        <div className="text-center">
          <UserProfile />
        </div>
      ) : (
        <Login />
      )}
    </>
  )
}

export default index
