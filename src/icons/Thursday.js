import React from "react"

const Thursday = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 40 40"
    >
      <g
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M15.833 30.833H2.5c-.92 0-1.667-.746-1.667-1.666V5.833c0-.92.747-1.666 1.667-1.666h30c.92 0 1.667.746 1.667 1.666v10.834M9.167.835v8.333M25.833.835v8.333M.833 12.502h33.334"
          strokeWidth="1.66667"
        />
        <path
          d="M29.167 19.168c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.476-10-10 4.476-10 10-10zM29.167 24.168v10M34.167 29.168h-10"
          strokeWidth="1.66667"
        />
      </g>
    </svg>
  )
}

export default Thursday
