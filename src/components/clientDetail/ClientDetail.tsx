import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import { db } from "@/services/firebase"
import { NewClient, CustomerInfo } from "@/types/types"

import CobrarButton from "../Buttons/CobrarButton/CobrarButton"
import DeleteButton from "../Buttons/deleteButton/DeleteButton"
import Link from "next/link"

const ClientDetail = () => {
  const [customer, setCustomer] = useState<NewClient>()
  const router = useRouter()

  const idReceived = router.query.id as string | undefined

  const getCustomer = async (id: string | undefined) => {
    const customer = await db.collection("customers").doc(id).get()
    setCustomer(customer.data() as NewClient)
  }

  useEffect(() => {
    getCustomer(idReceived)
    console.log()
  }, [customer])

  return customer ? (
    <div
      style={{
        maxWidth: "80%",
        minWidth: "60%",
        margin: "auto",
        border: "1px solid gray",
        borderRadius: "20px",
        borderColor: customer.cobrado ? "#c1d6cc" : "",
        padding: "2rem",
        backgroundColor: customer.cobrado ? "#c1d6cc" : "",
      }}
    >
      <h2 className="text-center">Fichero del cliente</h2>
      <br />
      <p>
        <strong>Cliente: </strong>
        {customer?.customer}
      </p>
      <p>
        <strong>Departamento: </strong>
        {customer?.departamento}
      </p>
      <p>
        <strong>Renta: </strong>
        {customer?.renta}
      </p>
      <p>
        <strong>Último cobro: </strong>
        {customer?.cobradoBy}
      </p>
      <p>
        <strong>Fecha creación: </strong>
        {customer?.createdAt}
      </p>
      <p>
        <strong>Creado por: </strong>
        {customer?.createdBy}
      </p>
      <div className="d-flex justify-content-evenly">
        <CobrarButton
          cobrado={customer?.cobrado}
          id={idReceived}
          context="detail"
        />
        <br className="mb-3" />
        <DeleteButton
          cobrado={customer?.cobrado}
          id={idReceived}
          context="detail"
        />
      </div>
    </div>
  ) : (
    <div className="alert alert-warning">
      Volver a{" "}
      <Link href="/resume">
        <a className="alert-link text-decoration-none"> clientes.</a>
      </Link>
    </div>
  )
}

export default ClientDetail
