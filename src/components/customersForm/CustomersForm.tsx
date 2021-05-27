import React, { FormEvent, useState, useRef, useEffect } from "react"

import { db } from "@/services/firebase"
import NumberFormat from "react-number-format"
import swal from "sweetalert2"

const CustomersForm = () => {
  const [customer, setCustomer] = useState("")
  const [renta, setRenta] = useState("")
  const [departamento, setDepartamento] = useState("")
  const [isloading, setIsloading] = useState(false)
  const [isModalClosed, setisModalClosed] = useState(false)

  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    firstInputRef.current?.focus()
  }, [isModalClosed])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    addClient(customer, renta, departamento)
    setCustomer("")
    setRenta("")
    setDepartamento("")
  }
  const addClient = async (
    customer: string,
    renta: string,
    departamento: string
  ) => {
    setIsloading(true)
    await db
      .collection("customers")
      .doc()
      .set({ customer, renta, departamento, cobrado: false })
      .then(() => setIsloading(false))
    swal.fire({
      title: "cliente creado",
      icon: "success",
      iconColor: "green",
      confirmButtonColor: "green",
    })
  }
  return (
    <form
      className="container"
      onSubmit={handleSubmit}
      style={{ maxWidth: "600px" }}
    >
      <h1 className="text-center my-3">Cargar nuevo cliente</h1>
      <div className="input-group my-2">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese el cliente"
          onChange={e => setCustomer(e.target.value)}
          value={customer}
          ref={firstInputRef}
          required
        />
      </div>
      <div className="input-group my-2">
        <NumberFormat
          type="text"
          thousandSeparator="."
          decimalSeparator=","
          className="form-control"
          placeholder="Ingrese el valor de la renta"
          onChange={e => setRenta(e.target.value)}
          value={renta}
          required
        />
      </div>
      <div className="input-group my-2">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese el departamento"
          onChange={e => setDepartamento(e.target.value)}
          value={departamento}
          required
        />
      </div>
      <div className="text-center">
        <button className="btn btn-lg btn-primary">
          {isloading ? <div className="spinner-border"></div> : "Cargar"}
        </button>
      </div>
    </form>
  )
}

export default CustomersForm
