import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Logout from "../Buttons/logoutButton/Logout"

const UserProfile = () => {
  const { user } = useAuth0()
  return (
    <div className="text-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={user?.picture} alt="User picture" className="card-img-top" />
        <div className="card-title">
          <h5>{`Welcome, ${user?.name}`}</h5>
        </div>
        <div className="card-body">
          <p>{user?.email}</p>
          <Logout />
        </div>
      </div>
    </div>
  )
}

export default UserProfile
