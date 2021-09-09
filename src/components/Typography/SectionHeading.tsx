import React from "react"

interface Props {
  children: React.ReactNode
}

const SectionHeading = (props: Props) => {
  return <h2 className="text-2xl mb-5">{props.children}</h2>
}

export default SectionHeading
