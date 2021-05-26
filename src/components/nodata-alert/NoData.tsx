import React from "react"
import Link from "next/dist/client/link"

const NoData = () => {
  return (
    <div className="alert alert-warning" role="alert">
      Sin clientes. Puede crearlos en la pestaña de{" "}
      <Link href="customers">
        <a className="alert-link text-decoration-none">clientes</a>
      </Link>{" "}
      y visualizarlos posteriormente.
    </div>
  )
}

export default NoData
