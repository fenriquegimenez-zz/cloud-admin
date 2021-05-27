import React from "react"

export interface LayoutChild {
  children?: React.ReactNode
}
export interface CustomerInfo {
  customer: string
  renta: string
  departamento: string
  cobrado?: boolean
  id?: string
}
export interface ButtonProps {
  cobrado: boolean | undefined
  id: string | undefined
}
