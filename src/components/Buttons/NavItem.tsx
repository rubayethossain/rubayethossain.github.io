import React from "react"

interface Props {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

const NavItem = ({ children, onClick, className, style }: Props) => {
  return (
    <button onClick={onClick} className={className} style={style}>
      {children}
    </button>
  )
}

export default NavItem
