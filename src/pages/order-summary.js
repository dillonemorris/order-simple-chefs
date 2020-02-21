import React, { useState, useContext } from "react"
import OrderContext from "../context/OrderContext"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OrderTotals from "../components/OrderTotals"
import Alert from "../components/Alert"

const OrderSummary = ({ location }) => {
  const [alert, setAlert] = useState(false)
  const { state } = location
  const { meals, subTotal, mealCount } = state

  const order = useContext(OrderContext)

  return (
    <Layout>
      <SEO title="Order Summary" />

      <div
        style={{ padding: `1.45rem 1.0875rem` }}
        className="font-sans flex-col flex-1 max-w-xl font-sans container mx-auto"
      >
        <h2 className="mt-12 mb-8">Order Summary</h2>
        <div className="grid grid-cols-3 gap-8 mb-24">
          {meals &&
            Object.values(meals).map(meal => {
              return (
                meal.quantity > 0 && (
                  <div key={meal.title} className="bg-white rounded shadow-sm">
                    <h3 className="text-lg bg-indigo-100 p-4 mb-0">
                      {meal.title}
                    </h3>
                    <h3 className="text-3xl mb-0 px-4 py-4">{meal.quantity}</h3>
                  </div>
                )
              )
            })}
        </div>
        <div className="mb-12" style={{ maxWidth: "20rem" }}>
          <OrderTotals subTotal={subTotal} mealCount={mealCount} />
        </div>
        {alert ? (
          <Alert setAlert={setAlert} />
        ) : (
          <button
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setAlert(true)}
          >
            Start Over
          </button>
        )}
      </div>
    </Layout>
  )
}

export default OrderSummary
