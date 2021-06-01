import React from "react"
import { db } from "@/services/firebase"
import { ButtonProps } from "@/types/types"
import Swal from "sweetalert2"

const DeleteButton = ({ cobrado, id, context }: ButtonProps) => {
  const deleteCustomer = async (id?: string) => {
    await db.collection("customers").doc(id).delete()
  }
  const deleteConfirm = () => {
    Swal.fire({
      title: "Está seguro que desea eliminar?",
      text: "Esta acción no se puede deshacer.",
      icon: "question",
      iconColor: "red",
      confirmButtonText: "Eliminar",
      confirmButtonColor: "red",
      showCancelButton: true,
      showCloseButton: true,
    }).then(response => {
      if (response.isConfirmed) {
        deleteCustomer(id)
        Swal.fire({
          title: "Cliente eliminado",
          icon: "success",
          iconColor: "red",
          confirmButtonColor: "gray",
        })
      }
    })
  }

  return (
    <button
      onClick={() => deleteConfirm()}
      className={`btn btn-outline-danger`}
      disabled={cobrado}
    >
      {context === "table" ? "🗑" : "Eliminar"}
    </button>
  )
}

export default DeleteButton
