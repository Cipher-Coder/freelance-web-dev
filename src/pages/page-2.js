import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Freelancing Web Dev</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
