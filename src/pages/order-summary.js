import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ location }) => {
  const [alert, setAlert] = useState(false)
  const { state: meals } = location
  return (
    <Layout>
      <SEO title="Order Summary" />
      <div
        style={{ padding: `1.45rem 1.0875rem` }}
        className="font-sans flex-col flex-1 max-w-xl font-sans container mx-auto"
      >
        <h2 className="mt-12 mb-8">Order Summary</h2>
        <div className="grid grid-cols-3 gap-8 mb-24">
          {Object.values(meals).map(meal => {
            return (
              meal.title && (
                <div className="bg-white rounded shadow-sm">
                  <h3 className="text-lg bg-indigo-100 p-4 mb-0">
                    {meal.title}
                  </h3>
                  <h3 className="text-3xl mb-0 px-4 py-4">{meal.quantity}</h3>
                </div>
              )
            )
          })}
        </div>

        <button
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setAlert(true)}
        >
          Start over
        </button>

        {alert && (
          <div
            class="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Careful!</strong>
            <span class="block sm:inline">
              {" "}
              This will start you over from scratch, erasing all progress
            </span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                class="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() => setAlert(false)}
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
            <button className="mt-2 px-6 py-2 bg-white hover:bg-red-200 text-white font-bold text-red-700 py-2 px-4 rounded-full">
              <Link to="/">I know, I want to start over</Link>
            </button>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default SecondPage
