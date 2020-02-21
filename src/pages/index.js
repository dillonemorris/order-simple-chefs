import React, { useState, useEffect } from "react"
import menu from "../data/menu"
import { OrderProvider } from "../context/OrderContext"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Meal from "../components/Meal"
import OrderTotals from "../components/OrderTotals"

const IndexPage = () => {
  const [meals, setMeals] = useState(menu.meals)
  const [subTotal, setSubTotal] = useState(0)
  const [mealCount, setMealCount] = useState(0)

  const state = { meals, subTotal, mealCount }

  const updateMeals = updatedMeal => {
    const mealToUpdate = meals.findIndex(item => item.id === updatedMeal.id)
    const updatedMeals = [...meals]
    updatedMeals[mealToUpdate] = updatedMeal

    setMeals(updatedMeals)
  }

  const totals = meals.reduce(
    ({ meals = 0, price = 0 }, meal) => ({
      meals: (meals += meal.quantity),
      price: (price += meal.price || 0),
    }),
    {}
  )

  useEffect(() => {
    setSubTotal(totals.price)
    setMealCount(totals.meals)
  }, [totals.price, totals.meals])

  return (
    <Layout>
      <SEO title="Home" />
      <OrderProvider value={state}>
        <div
          style={{ padding: `1.45rem 1.0875rem` }}
          className="flex-col flex-1 max-w-xl font-sans container mx-auto"
        >
          <h1 className="text-xl text-center text-gray-700">Menu</h1>
          {meals.map(meal => (
            <Meal
              key={meal.id}
              meal={meal}
              meals={meals}
              updateMeals={updateMeals}
              quantity={meal.quantity}
            />
          ))}

          <div style={{ maxWidth: "20rem", margin: "auto" }}>
            <OrderTotals subTotal={subTotal} mealCount={mealCount} />
          </div>

          <div className="text-center m-auto mt-12">
            <Link
              className="px-32 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
              state={{ meals, subTotal, mealCount }}
              to="/order-summary/"
            >
              Place Order
            </Link>
          </div>
        </div>
      </OrderProvider>
    </Layout>
  )
}

export default IndexPage
