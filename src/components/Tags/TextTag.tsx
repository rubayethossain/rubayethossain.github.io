import React from "react"

interface Props {
  children: React.ReactNode
}

const TextTag = ({ children }: Props) => {
  return (
    <span className="py-1 px-2 text-green-500 rounded border border-green-500 bg-green-500 bg-opacity-5">
      {children}
    </span>
  )
}

export default TextTag
