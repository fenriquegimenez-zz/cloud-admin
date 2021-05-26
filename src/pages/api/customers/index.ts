import { db } from "@/services/firebase"
import { NextApiRequest, NextApiResponse } from "next"

const getAllCustomers = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const entries = await db.collection("customers").get()
  response.status(200).json(entries)
}

export default getAllCustomers
