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
        <div className="rounded p-8 shadow-lg bg-white">
          {meals && <h3 className="text-lg">Monday</h3>}
          {meals &&
            meals.map(
              meal =>
                meal.quantity > 0 &&
                !meal.thursday && (
                  <div key={meal.title} className="flex">
                    <p className="text-base font-normal mb-0">
                      {meal.title} ({meal.quantity})
                    </p>
                  </div>
                )
            )}
          <div className="mt-6">
            {meals && <h3 className="text-lg">Thursday</h3>}
            {meals &&
              meals.map(
                meal =>
                  meal.quantity > 0 &&
                  meal.thursday && (
                    <div key={meal.title} className="flex">
                      <p className="text-base font-normal mb-0">
                        {meal.title} ({meal.quantity})
                      </p>
                    </div>
                  )
              )}
          </div>
        </div>
        <div className="mb-12" style={{ maxWidth: "20rem" }}>
          <OrderTotals subTotal={subTotal} mealCount={mealCount} />
        </div>
      </div>
    </Layout>
  )
}

export default OrderSummary
