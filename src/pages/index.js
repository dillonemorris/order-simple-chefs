import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Meal from "../components/Meal"

const menu = {
  meals: [
    {
      id: 1,
      title: "Turkey Bolognese",
      vegan: false,
      vegetarian: false,
      favorite: false,
      quantity: 0,
    },
    {
      id: 2,
      title: "Meat & Potatoes",
      vegan: false,
      vegetarian: false,
      favorite: false,
      quantity: 0,
    },
    {
      id: 3,
      title: "Turkey Burgers",
      vegan: false,
      vegetarian: false,
      favorite: false,
      quantity: 0,
    },
    {
      id: 4,
      title: "Chop Salad",
      vegan: false,
      vegetarian: false,
      favorite: false,
      quantity: 0,
    },
  ],
}

const IndexPage = () => {
  const [meals, setMeals] = useState(menu.meals)

  const updateMeals = updatedMeal => {
    const mealToUpdate = meals.findIndex(item => item.id === updatedMeal.id)
    const updatedMeals = [...meals]
    updatedMeals[mealToUpdate] = updatedMeal

    setMeals(updatedMeals)
  }

  console.log(meals)

  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{ padding: `1.45rem 1.0875rem` }}
        className="flex-col h-screen flex-1 max-w-2xl font-sans container mx-auto"
      >
        {meals.map(meal => (
          <Meal
            key={meal.id}
            meal={meal}
            meals={meals}
            updateMeals={updateMeals}
            quantity={meal.quantity}
          />
        ))}

        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Layout>
  )
}

export default IndexPage
