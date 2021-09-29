import React from "react"

interface Props {
  icon: string
  title: string
}

const BoxIconTag = ({ icon, title }: Props) => {
  return (
    <div>
      <img src={icon} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default BoxIconTag
