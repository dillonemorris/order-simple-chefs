import React, { useContext } from "react"
import { Link } from "gatsby"
import { OrderContext } from "../context/OrderContext"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OrderTotals from "../components/OrderTotals"

const OrderSummary = () => {
  const { meals, subTotal, mealCount } = useContext(OrderContext)

  return (
    <Layout>
      <SEO title="Order Summary" />

      <div
        style={{ padding: `1.45rem 1.0875rem` }}
        className="font-sans flex-col flex-1 max-w-xl font-sans container mx-auto h-full"
      >
        <div className="flex justify-between items-center pb-4 mb-2">
          <h2 className="mt-12 mb-8">Order Summary</h2>
          <Link
            className="bg-transparent hover:bg-indigo-600 text-indigo-600 font-semibold hover:text-white py-2 px-4 border border-indigo-600 hover:border-transparent rounded-full"
            to="/"
          >
            Edit Order
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-8 mb-24">
          {meals &&
            meals.map(meal => {
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
      </div>
    </Layout>
  )
}

export default OrderSummary
