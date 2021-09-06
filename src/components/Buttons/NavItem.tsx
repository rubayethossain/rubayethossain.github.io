import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface Props {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
  icon: IconProp
}

const NavItem = ({ children, onClick, className, style, icon }: Props) => {
  return (
    <button onClick={onClick} className={className} style={style}>
      <FontAwesomeIcon icon={icon} />
      {children}
    </button>
  )
}

export default NavItem
