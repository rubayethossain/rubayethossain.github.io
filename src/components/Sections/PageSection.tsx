import React from "react"

interface Props {
  children: React.ReactNode
}

const PageSection = (props: Props) => {
  return <section className="mb-8">{props.children}</section>
}

export default PageSection
