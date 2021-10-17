import React, { CSSProperties } from "react"
import { TextTag } from "."

interface Props {
  icon: string
  title: string
  className?: string
  style?: CSSProperties
}

const BoxIconTag = ({ icon, title, className, style }: Props) => {
  return (
    <div className={`w-24 h-24 flex flex-col ${className || ""}`} style={style}>
      <div className="flex-1 flex flex-col justify-center px-2">
        <img
          src={icon}
          alt={title}
          className="max-h-12 block mx-auto max-w-full self-baseline"
        />
      </div>

      <p className="text-center font-semibold">
        <TextTag>{title}</TextTag>
      </p>
    </div>
  )
}

export default BoxIconTag
