import React from "react"

const Vegetarian = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <g
        stroke={color}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M39.262 20.966a17.89 17.89 0 00-5.022-7.2 17.89 17.89 0 00-7.2-5.022 5.987 5.987 0 00-7.356 3.076S6.71 32.294 1.892 42.098a3 3 0 004 4c9.8-4.82 30.278-17.8 30.278-17.8a6 6 0 003.092-7.332zM34.24 13.76l6.404-6.404M37.082 16.886l9.344-1.626M31.112 10.918l1.628-9.346M19.672 11.84l7.182 7.182M8.416 30.282l5.712 5.712M21.552 26.448l6.762 6.762"
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}

export default Vegetarian
