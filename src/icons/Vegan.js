import React from "react"

const Vegan = ({ color }) => {
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
          d="M46.498 26.25c0 9.942-10.072 18-22.5 18s-22.5-8.05-22.5-18h45zM17.48 20.25a13.587 13.587 0 00-3.982-4.5"
          strokeWidth="3"
        />
        <path
          d="M24.346 13.706a5.999 5.999 0 00-8.4-6.438 6.003 6.003 0 00-10.928 4.966 6 6 0 00-2.98 7.944l.034.072M43.348 20.25a7.499 7.499 0 00-5.858-8.842 7.499 7.499 0 00-8.842 8.842"
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}

export default Vegan
