/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import OrderProvider from "./src/context/OrderContext"
export const wrapRootElement = ({ element }) => (
  <OrderProvider>{element}</OrderProvider>
)

// You can delete this file if you're not using it
