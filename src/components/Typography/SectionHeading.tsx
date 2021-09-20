import React from "react"

interface Props {
  children: React.ReactNode
}

const SectionHeading = (props: Props) => {
  return <h2 className="text-3xl mb-5 text-gray-600">{props.children}</h2>
}

export default SectionHeading
