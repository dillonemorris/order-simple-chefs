import React from "react"

const OrderTotals = ({ subTotal, mealCount }) => {
  const tipRate = 0.1
  const tip = subTotal * tipRate
  const total = subTotal + tip
  return (
    <>
      <div className="mb-4 mt-24 flex">
        <h2 className="mb-0 text-lg">Order</h2>
        <p className="mx-2 mb-0 text-gray-600">&bull; </p>
        <p className="mb-0 text-md ml-1 text-gray-600">{mealCount} Dishes</p>
      </div>
      <div className="flex flex-col bg-white rounded p-8 shadow-lg">
        <div className="flex justify-between text-xl text-gray-600">
          <p className="text-lg mb-2">Sub total</p>
          <p className="ml-1 text-lg">${subTotal}</p>
        </div>
        <div className="flex justify-between text-gray-600">
          <p className="text-lg mb-4">Tip</p>
          <p className="ml-1 text-lg mb-0">${Math.floor(tip)}</p>
        </div>
        <div className="flex justify-between mt-2 text-gray-900">
          <h2 className="text-xl text-bold">Total</h2>
          <h2 className="ml-1 text-xl mb-0">${Math.floor(total)}</h2>
        </div>
      </div>
    </>
  )
}

export default OrderTotals
