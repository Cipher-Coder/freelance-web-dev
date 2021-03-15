import * as React from 'react'
import PropTypes from 'prop-types'

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Navigation = ({ siteTitle }) => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
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
