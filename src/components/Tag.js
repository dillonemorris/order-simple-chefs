import React from "react"
import Icon from "./Icon"

const Tag = ({ backgroundColor, color, title, icon, iconColor }) => {
  return (
    <div
      className="flex items-center mb-3 px-3 py-1 rounded-full mr-2 capitalize text-indigo-900 bg-indigo-100"
      style={{
        background: backgroundColor,
        color: color,
      }}
    >
      <Icon color={iconColor} name={icon} />
      <p className="ml-1">{title}</p>
    </div>
  )
}

export default Tag
