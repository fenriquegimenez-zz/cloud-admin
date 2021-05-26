import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Spinner from "../spinner/Spinner"
import Logout from "../logoutButton/Logout"

const UserProfile = () => {
  const { user, isLoading } = useAuth0()
  return (
    <div className="text-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={user?.picture}
            alt="User picture"
            className="card-img-top"
          />
          <div className="card-title">
            <h5>{`Welcome, ${user?.name}`}</h5>
          </div>
          <div className="card-body">
            <p>{user?.email}</p>
            <Logout />
          </div>
        </div>
      )}
    </div>
  )
}

export default UserProfile
