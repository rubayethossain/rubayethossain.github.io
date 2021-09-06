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
      className={`flex flex-col items-center justify-center w-28 h-28 border ${className}`}
      style={style}
    >
      <FontAwesomeIcon icon={icon} className="text-3xl mb-2" />
      <h3>{title}</h3>
    </button>
  )
}

export default NavItem
