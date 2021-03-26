import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Form, Col, Button } from 'react-bootstrap'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="contact-page m-3">
      <h1>Contact Us!</h1>
      <p>Freelancing Web Developer</p>
      <p>
        If you know of a tool that should be on here or have one of your own
        that you would like others to see, please submit it below:
      </p>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              <span style={{ color: `red` }}>* </span>Email
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridUrl">
            <Form.Label>
              <span style={{ color: `red` }}>* </span>URL
            </Form.Label>
            <Form.Control type="url" placeholder="Url" required />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p className="small" style={{ color: `red` }}>
          * Required Field
        </p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
