import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Login = () => {
  const { loginWithPopup } = useAuth0()

  return (
    <div className="text-center">
      <button onClick={() => loginWithPopup()} className="btn btn-primary">
        Log In
      </button>
    </div>
  )
}

export default Login
