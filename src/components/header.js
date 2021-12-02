import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { colors } from '../utils/styles';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: colors.brandSecondary,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 5rem`,
        maxWidth: 960,
        padding: `1rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: colors.brandMain,
            textDecoration: `none`,
          }}
        >
          ≡ {siteTitle}
        </Link>
      </h1>
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
