import React from "react"

import { db } from "@/services/firebase"
import { ButtonProps } from "@/types/types"
import swal from "sweetalert2"

const CobrarButton = ({ cobrado, id }: ButtonProps) => {
  const toggleCobrado = async ({ cobrado, id }: ButtonProps) => {
    await db.collection("customers").doc(id).update({ cobrado: !cobrado })
    swal.fire({
      title: cobrado ? "Anulación exitosa" : "Cobro exitoso",
      icon: cobrado ? "info" : "success",
      iconColor: "green",
      confirmButtonColor: "green",
    })
  }

  return (
    <button
      onClick={() => toggleCobrado({ cobrado, id })}
      className="btn btn-outline-success"
    >
      {cobrado ? "✔" : "💰"}
    </button>
  )
}

export default CobrarButton
