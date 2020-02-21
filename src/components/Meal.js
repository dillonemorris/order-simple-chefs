import React, { useState, useEffect, useContext } from "react"
import { OrderContext } from "../context/OrderContext"

import { PRICES } from "../data/menu"

const Meal = ({ updateMeals, meal }) => {
  // TODO: Create Tag component. One for each of these if they are true
  const { vegan, vegetarian, wholeThirty } = meal
  const [mealOrder, setMealOrder] = useState(meal)

  const order = useContext(OrderContext)

  console.log(order)

  const updateCountAndPrice = ({ quantity, isSide, isSoup }, action) => {
    if (action === "decrement" && quantity > 0) {
      quantity -= 1
    } else {
      quantity += 1
    }
    let price = 0
    if (isSide) {
      price = quantity * PRICES.side
    } else if (isSoup) {
      price = quantity * PRICES.soup
    } else {
      price = quantity * PRICES.meal
    }
    setMealOrder({ ...meal, quantity, price })
  }

  useEffect(() => {
    updateMeals(mealOrder)
  }, [mealOrder])

  return (
    <div className="flex flex-row justify-between items-center w-full rounded-full my-8 p-4 py-6 bg-white shadow-md">
      <div className="pl-8 pr-4">
        <h1 className="text-xl mb-1 text-gray-900">{meal.title}</h1>
        <p className="mb-0 text-gray-700">{meal.description}</p>
      </div>
      <div className="inline-flex items-center">
        <button
          onClick={() => updateCountAndPrice(meal, "decrement")}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-3 rounded-full"
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
              strokeWidth="2.5000050000000003"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h3 className="w-12 px-4 mb-0 text-center">{meal.quantity}</h3>
        <button
          onClick={() => updateCountAndPrice(meal)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-3 rounded-full"
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M1.25 20h37.5M20 1.25v37.5"
                strokeWidth="2.5000050000000003"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Meal
