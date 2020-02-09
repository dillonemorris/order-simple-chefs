import React, { useState, useEffect } from "react"

const Meal = ({ meals, updateMeals, meal }) => {
  const [mealOrder, setMealOrder] = useState(meal)

  const updateMealCount = (id, action) => {
    const mealToUpdate = meals.find(meal => meal.id === id)
    if (action === "increment") {
      setMealOrder({ ...mealToUpdate, quantity: mealToUpdate.quantity + 1 })
    }
    if (action === "decrement") {
      setMealOrder({ ...mealToUpdate, quantity: mealToUpdate.quantity - 1 })
    }
  }

  useEffect(() => {
    updateMeals(mealOrder)
  }, [mealOrder])

  return (
    <div>
      <h1>{meal.title}</h1>
      <p>{meal.quantity}</p>
      <button onClick={() => updateMealCount(meal.id, "increment")}>
        add 1 to order
      </button>
      <button onClick={() => updateMealCount(meal.id, "decrement")}>
        remove 1 from order
      </button>
    </div>
  )
}

export default Meal
