import * as React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NotFoundPage
