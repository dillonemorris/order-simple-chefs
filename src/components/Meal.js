import React, { useState, useEffect } from "react"

const Meal = ({ meals, updateMeals, meal }) => {
  const [mealOrder, setMealOrder] = useState(meal)
  const mealToUpdate = id => meals.find(meal => meal.id === id)

  const incrementMealCount = id => {
    const myMeal = mealToUpdate(id)
    setMealOrder({ ...myMeal, quantity: myMeal.quantity + 1 })
  }

  const decrementMealCount = id => {
    const myMeal = mealToUpdate(id)
    if (myMeal.quantity > 0) {
      setMealOrder({ ...myMeal, quantity: myMeal.quantity - 1 })
    }
  }

  useEffect(() => {
    updateMeals(mealOrder)
  }, [mealOrder])

  return (
    <div className="flex flex-row justify-between items-center w-full rounded-full my-8 p-4 py-6 bg-white shadow-sm">
      <div className="pl-8">
        <h1 className="text-xl mb-1 text-gray-900">{meal.title}</h1>
        <p className="mb-0 text-gray-700">{meal.description}</p>
      </div>
      <div class="inline-flex items-center">
        <button
          onClick={() => decrementMealCount(meal.id)}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-3 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 40 40"
          >
            <path
              d="M1.25 20.063h37.5"
              stroke="#000"
              fill="none"
              stroke-width="2.5000050000000003"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <h3 class="w-12 px-4 mb-0 text-center">{meal.quantity}</h3>
        <button
          onClick={() => incrementMealCount(meal.id)}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-3 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 40 40"
          >
            <g
              stroke="#000"
              fill="none"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M1.25 20h37.5M20 1.25v37.5"
                stroke-width="2.5000050000000003"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Meal
