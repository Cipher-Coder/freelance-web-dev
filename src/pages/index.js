import * as React from 'react'
/* import { Link } from 'gatsby' */
/* import { StaticImage } from 'gatsby-plugin-image' */

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import backgroundImage from '../images/lightWebDev.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="svg-background"
      style={{
        backgroundColor: `#ffffff`,
      }}>
      <object
        data={backgroundImage}
        alt="Map of topics"
        style={{ width: `100vw`, height: `95vh` }}></object>
      {/* <StaticImage
      src="../images/darkWebDev.svg"
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="A Gatsby astronaut"
      style={{ height: `92vh`, width: `100vw` }}
    /> */}
      {/* <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p> */}
    </div>
  </Layout>
)

export default IndexPage
