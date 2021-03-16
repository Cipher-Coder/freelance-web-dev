import * as React from 'react'

function Footer() {
  return (
    <footer
      style={{
        textAlign: `center`,
        backgroundColor: `#343A40`,
        color: `#e2e2e2`,
        padding: `.9rem`,
        fontSize: `.75rem`,
      }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a className="footer-link" href="https://gatsbyjs.com">
        Gatsby
      </a>
      , By:{' '}
      <a className="footer-link" href="https://mattaz.com">
        Mattaz Web Design
      </a>
    </footer>
  )
}
export default Footer
