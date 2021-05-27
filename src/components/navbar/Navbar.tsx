import React from "react"
import Link from "next/link"

import { useAuth0 } from "@auth0/auth0-react"
import Login from "../loginButton/Login"
import LogoutIcon from "../logoutButton/LogoutIcon"

const Navbar = () => {
  const { isAuthenticated } = useAuth0()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <Link href="/">
        <a className="navbar-brand mx-auto">Inicio</a>
      </Link>
      {isAuthenticated ? (
        <ul className="navbar-nav mx-auto">
          <li className="nav-item ">
            <Link href="/customers">
              <a className="nav-link text-decoration-none">Clientes</a>
            </Link>
          </li>
          <li className="nav-item ">
            <Link href="/resume">
              <a className="nav-link text-decoration-none">Resumen</a>
            </Link>
          </li>
          <li>
            <LogoutIcon />
          </li>
        </ul>
      ) : (
        <Login outline={true} />
      )}
    </nav>
  )
}

export default Navbar
