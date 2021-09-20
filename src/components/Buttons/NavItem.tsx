import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface Props {
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
  icon: IconProp
  title: string
}

const NavItem = ({ title, onClick, className, style, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-28 h-24 border bg-white ${className}`}
      style={style}
    >
      <FontAwesomeIcon icon={icon} className=" text-lg mb-3" />
      <h3 className="font-semibold">{title}</h3>
    </button>
  )
}

export default NavItem
