import React from "react"

const Side = ({ color }) => {
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
          d="M23.998 1.5c12.426 0 22.5 10.074 22.5 22.5s-10.074 22.5-22.5 22.5-22.5-10.074-22.5-22.5 10.074-22.5 22.5-22.5z"
          strokeWidth="3"
        />
        <path
          d="M29.47 33.702a4.8 4.8 0 01-8.268 4.8l-9.082-13.6a3 3 0 01.828-4.16c.052-.034.104-.068.16-.1l4.852-2.814a3.002 3.002 0 014.19 1.25l7.32 14.624zM15.354 29.75l4.702-2.732M15.534 19.238L8.628 16.31M15.534 19.238l.876-7.45M24.748 13.6a6 6 0 0110.5 5.8l-10.5-5.8z"
          strokeWidth="3"
        />
        <path
          d="M32.836 18.072a5.998 5.998 0 00-4.338 3.024l10.5 5.8a5.999 5.999 0 00-3.286-8.574"
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}

export default Side
