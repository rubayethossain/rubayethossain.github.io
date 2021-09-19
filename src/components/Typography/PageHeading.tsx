import React from "react"

interface Props {
  children: React.ReactNode
}

const PageHeading = (props: Props) => {
  return <h1 className="mb-5 text-3xl">{props.children}</h1>
}

export default PageHeading
