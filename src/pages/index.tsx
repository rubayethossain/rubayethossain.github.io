import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/Intro"

const IndexPage = () => (
  <Layout topSection={<Intro />}>
    <Seo title="Welcome" />
  </Layout>
)

export default IndexPage
