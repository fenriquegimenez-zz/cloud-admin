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
  cobrado?: boolean
  id?: string
  context?: string
}
export interface NewClient {
  customer: string
  renta: string
  departamento: string
  userEmail?: string
  cobrado?: boolean
  createdBy?: string
  createdAt: string
}
