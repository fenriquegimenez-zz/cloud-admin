import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Logout = () => {
  const { logout } = useAuth0()
  return (
    <div className="text-center">
      <button onClick={() => logout()} className="btn btn-outline-primary">
        Log out
      </button>
    </div>
  )
}

export default Logout
