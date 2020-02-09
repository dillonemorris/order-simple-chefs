import React, { useState } from "react"
import menu from "../data/menu"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Meal from "../components/Meal"

const IndexPage = () => {
  const [meals, setMeals] = useState(menu.meals)

  const updateMeals = updatedMeal => {
    const mealToUpdate = meals.findIndex(item => item.id === updatedMeal.id)
    const updatedMeals = [...meals]
    updatedMeals[mealToUpdate] = updatedMeal

    setMeals(updatedMeals)
  }

  return (
    <Layout>
      <SEO title="Home" />
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

        <div className="text-center m-auto mt-16">
          <Link
            className="px-48 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
            state={meals}
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
