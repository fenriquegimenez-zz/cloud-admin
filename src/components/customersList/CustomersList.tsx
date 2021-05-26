import React, { useState, useEffect } from "react"
import { db } from "@/services/firebase"
import { CustomerInfo } from "@/types/types"
const thousands = require("thousands")
import clsx from "clsx"
import { toast } from "react-toastify"

const CustomersList = () => {
  const [customers, setCustomers] = useState<CustomerInfo[]>([])
  const [loading, setLoading] = useState(true)

  const toggleCobrado = async (cobrado?: boolean, id?: string) => {
    if (await cobrado) {
      db.collection("customers")
        .doc(id)
        .update({ cobrado: false })
        .then(() => setLoading(false))
      toast("Cobro de renta anulado", { type: "info" })
    } else {
      await db
        .collection("customers")
        .doc(id)
        .update({ cobrado: true })
        .then(() => setLoading(false))
      toast("Renta cobrada", { type: "success" })
    }
  }

  const getCustomers = () => {
    db.collection("customers").onSnapshot(querySnapshot => {
      const customersList: CustomerInfo[] = []
      querySnapshot.forEach(doc => {
        customersList.push({ ...doc.data(), id: doc.id } as CustomerInfo)
      })
      setCustomers(customersList)
    })
  }

  const deleteCustomer = (id?: string) => {
    db.collection("customers").doc(id).delete()
    toast("Cliente eliminado.", { type: "error" })
  }

  useEffect(() => {
    getCustomers()
  }, [])
  return (
    <>
      <h2 className="text-center my-3">Listado de clientes</h2>
      <div className="text-center d-flex justify-content-center">
        <table
          className=" table table-hover table-bordered "
          style={{ maxWidth: "600px" }}
        >
          <thead className="text-center">
            <tr>
              <th>Cliente</th>
              <th>Renta</th>
              <th>Departamento</th>
              <th>Cobrado?</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => {
              const successBg = clsx({
                "table-success": customer.cobrado,
              })
              return (
                <tr className={successBg}>
                  <td>{customer.customer}</td>
                  <td>{`Gs. ${thousands(customer.renta, ".")}`}</td>
                  <td>{customer.departamento}</td>
                  <td className="text-center">
                    <button
                      onClick={() =>
                        toggleCobrado(customer.cobrado, customer.id)
                      }
                      className="btn btn-sm btn-outline-success"
                    >
                      {customer.cobrado ? "✔" : "💰"}
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={customer.cobrado}
                      onClick={() => deleteCustomer(customer.id)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CustomersList
