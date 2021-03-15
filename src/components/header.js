import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import shortLogo from '../images/logo3.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ced4da`,
      marginBottom: `1rem`,
    }}>
    <div
      style={{
        margin: `0 auto`,
        padding: `.5rem 1rem 0 1rem`,
      }}>
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#9F3236`,
            textDecoration: `none`,
            display: `inline-flex`,
          }}>
          <img
            src={shortLogo}
            alt="Site Logo"
            width="30"
            style={{ paddingRight: `5px` }}
          />
          {siteTitle}
        </Link>
      </h4>
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
