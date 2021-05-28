import React, { PropsWithChildren } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Login = ({ outline }: any) => {
  const { loginWithPopup } = useAuth0()

  return (
    <div className="text-center">
      <button
        onClick={() => loginWithPopup()}
        className={`btn btn${outline ? "-outline" : ""}-primary`}
      >
        Iniciar sesión
      </button>
    </div>
  )
}

export default Login
