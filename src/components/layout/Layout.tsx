import React from "react"

import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import { LayoutChild } from "@/types/types"

const Layout = ({ children }: LayoutChild) => {
  return (
    <div className="container vh-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
