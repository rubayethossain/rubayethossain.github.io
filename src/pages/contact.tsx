import React, { ReactElement } from "react"
import Layout from "../components/layout"
import { PageSection } from "../components/Sections"
import { PageHeading } from "../components/Typography"

function contact(): ReactElement {
  return (
    <Layout>
      <PageSection>
        <PageHeading>Contact</PageHeading>
        <p>Coming soon...</p>
      </PageSection>
    </Layout>
  )
}

export default contact
