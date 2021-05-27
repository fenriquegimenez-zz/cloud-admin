import React from "react"

import Toast from "../toast/Toast"
import { toast } from "react-toastify"
import { db } from "@/services/firebase"
import { ButtonProps } from "@/types/types"

const CobrarButton = ({ cobrado, id }: ButtonProps) => {
  const toggleCobrado = async ({ cobrado, id }: ButtonProps) => {
    await db.collection("customers").doc(id).update({ cobrado: !cobrado })
    toast(
      <Toast
        type={cobrado ? "info" : "success"}
        message={
          cobrado ? "Anulación de cobro exitosa" : "Cobrado exitosamente"
        }
      />
    )
  }

  return (
    <button
      onClick={() => toggleCobrado({ cobrado, id })}
      className="btn btn-sm btn-outline-success"
    >
      {cobrado ? "✔" : "💰"}
    </button>
  )
}

export default CobrarButton
