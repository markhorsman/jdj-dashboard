import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Internationaal groeien met een nieuwe uitstraling en structuur</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/*<Image />*/}
    </div>
      <ul>
          <li>
              <Link to="/stock/">Overzicht artikelen</Link>
          </li>
      </ul>
  </Layout>
)

export default IndexPage