import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import { OrderContext } from "../context/OrderContext"
import { defaultOrderState } from "../context/OrderContext"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Meal from "../components/Meal"
import OrderTotals from "../components/OrderTotals"

const IndexPage = () => {
  const {
    meals,
    setMeals,
    subTotal,
    setSubTotal,
    mealCount,
    setMealCount,
  } = useContext(OrderContext)

  useEffect(() => {
    const totals = meals.reduce(
      ({ meals = 0, price = 0 }, meal) => ({
        meals: (meals += meal.quantity),
        price: (price += meal.price || 0),
      }),
      {}
    )
    setSubTotal(totals.price)
    setMealCount(totals.meals)
  }, [meals])

  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{ padding: `1.0875rem` }}
        className="flex-col flex-1 max-w-xl font-sans container mx-auto"
      >
        <div className="flex justify-between border-b border-gray-400 pb-4 mb-12">
          <h1 className="text-2xl self-end text-gray-700 px-12">Menu</h1>
          <button
            className="bg-transparent hover:bg-indigo-600 text-indigo-600 font-semibold hover:text-white py-2 px-4 border border-indigo-600 hover:border-transparent rounded-full"
            onClick={() => setMeals(defaultOrderState)}
          >
            Clear Order
          </button>
        </div>
        <div>
          {meals &&
            meals.map(meal => (
              <Meal
                key={meal.id}
                meal={meal}
                meals={meals}
                quantity={meal.quantity}
              />
            ))}
        </div>
        <div style={{ maxWidth: "20rem", margin: "auto" }}>
          <OrderTotals subTotal={subTotal} mealCount={mealCount} />
        </div>
        <div className="text-center m-auto mt-12 mb-24">
          <Link
            className="px-32 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
            to="/order-summary/"
          >
            Place Order
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
