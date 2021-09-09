import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/Intro"
import { SectionHeading } from "../components/Typography"

const IndexPage = () => (
  <Layout topSection={<Intro />}>
    <Seo title="Welcome" />

    <SectionHeading>Myself</SectionHeading>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolore
      temporibus culpa qui obcaecati porro dolorum ut voluptatum error? Illum
      magni, debitis, blanditiis deserunt molestias cupiditate assumenda quidem
      totam voluptas, quam amet.
    </p>
  </Layout>
)

export default IndexPage
