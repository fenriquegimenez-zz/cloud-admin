import React from "react"

import { db } from "@/services/firebase"
import { useAuth0 } from "@auth0/auth0-react"
import { ButtonProps } from "@/types/types"
import swal from "sweetalert2"

const CobrarButton = ({ cobrado, id, context }: ButtonProps) => {
  const { user } = useAuth0()
  const toggleCobrado = async ({ cobrado, id }: ButtonProps) => {
    await db
      .collection("customers")
      .doc(id)
      .update({ cobrado: !cobrado, cobradoBy: user?.name })

    swal.fire({
      title: cobrado ? "Anulación exitosa" : "Cobro exitoso",
      icon: cobrado ? "info" : "success",
      iconColor: "green",
      confirmButtonColor: "green",
    })
  }

  return (
    <button
      onClick={() => toggleCobrado({ cobrado, id, context })}
      className="btn btn-outline-success"
    >
      {cobrado
        ? context === "table"
          ? "✔"
          : "Anular"
        : context === "detail"
        ? "Cobrar"
        : "💰"}
    </button>
  )
}

export default CobrarButton
