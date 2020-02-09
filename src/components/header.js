import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "#fff",
    }}
  >
    <div
      className="max-w-xl"
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div className="flex flex-row justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <g
            stroke="#5A67D8"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M8.75 27.5a3.75 3.75 0 110 7.5 3.75 3.75 0 110-7.5zM31.25 27.5a3.75 3.75 0 110 7.5 3.75 3.75 0 110-7.5z"
              stroke-width="2.5000050000000003"
              stroke="#434190"
            />
            <path
              d="M38.75 17.5V30a2.5 2.5 0 01-2.5 2.5h-1.463M27.713 32.5H12.287M5.213 32.5H3.75a2.5 2.5 0 01-2.5-2.5v-8.75l4.288-7.453c.44-.8 1.28-1.297 2.192-1.297H10M13.75 18.75V32.5M1.25 21.25h12.5M23.75 11.25a2.5 2.5 0 01-5 0M28.75 11.25a2.5 2.5 0 01-5 0M33.75 11.25a2.5 2.5 0 01-5 0"
              stroke-width="2.5000050000000003"
            />
            <path
              d="M33.75 11.25a2.5 2.5 0 005 0L36.25 5h-20l-2.5 6.25a2.5 2.5 0 005 0M33.75 17.5v5h-15v-5"
              stroke-width="2.5000050000000003"
              stroke="#434190"
            />
          </g>
        </svg>
        <h3 className="font-sans text-lg text-gray-900 text-center ml-3 mb-0">
          <Link to="/">{siteTitle}</Link>
        </h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
