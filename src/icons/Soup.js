import React from "react"

const Soup = ({ color }) => {
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
          d="M34.062 1.5c2.874 5.746-5.8 7.762-1.5 13.5M25.062 1.5c2.874 5.746-5.8 7.762-1.5 13.5M16.062 1.5c2.874 5.746-5.8 7.762-1.5 13.5M24 19.5c12.426 0 22.5 2.686 22.5 6s-10.074 6-22.5 6-22.5-2.686-22.5-6 10.074-6 22.5-6z"
          strokeWidth="3"
        />
        <path
          d="M46.5 25.5c0 11.6-10.074 21-22.5 21s-22.5-9.402-22.5-21"
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}

export default Soup
