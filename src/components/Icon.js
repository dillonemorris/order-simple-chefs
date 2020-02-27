import React from "react"
import Icons from "../icons"

const Icon = ({ name, ...props }) => {
  const Component = Icons[name]
  if (!Component) return
  return <Component {...props} />
}

Icon.displayName = "Icon"

export default Icon
