import React from "react"
import Link from "next/dist/client/link"

const Toast = ({ type, message }: any) => {
  return (
    <div
      className={`alert alert-${type}`}
      role="alert"
      style={{ maxWidth: "400px" }}
    >
      {message}
    </div>
  )
}

export default Toast
