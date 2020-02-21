import { createContext } from "react"
import menu from "../data/menu"

const OrderContext = createContext()

export const OrderProvider = OrderContext.Provider
export default OrderContext
