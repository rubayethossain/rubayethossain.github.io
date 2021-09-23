import React from "react"
interface Props {
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
  icon: JSX.Element
  title: string
}

const NavItem = ({ title, onClick, className, style, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-28 h-24 border bg-white ${className}`}
      style={style}
    >
      {icon}
      <h3 className="font-semibold">{title}</h3>
    </button>
  )
}

export default NavItem
