import * as React from 'react'
import PropTypes from 'prop-types'

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import smallLogo from '../images/logo3.png'

const Navigation = ({ siteTitle }) => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" style={{ fontFamily: `cursive` }}>
        <img
          alt=""
          src={smallLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        {siteTitle}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  </>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
