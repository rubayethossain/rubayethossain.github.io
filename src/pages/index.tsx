import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/Intro"
import { PageHeading, SectionHeading } from "../components/Typography"
import PageSection from "../components/Sections/PageSection"

const IndexPage = () => (
  <Layout topSection={<Intro />}>
    <Seo title="Welcome" />

    <PageSection>
      <PageHeading>About Myself</PageHeading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolore
        temporibus culpa qui obcaecati porro dolorum ut voluptatum error? Illum
        magni, debitis, blanditiis deserunt molestias cupiditate assumenda
        quidem totam voluptas, quam amet.
      </p>
    </PageSection>

    <PageSection>
      <SectionHeading>What I do</SectionHeading>
      <div className="grid grid-cols-3"></div>
    </PageSection>
  </Layout>
)

export default IndexPage
