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
      className={`flex flex-col items-center justify-center w-28 h-24 bg-white hover:bg-gray-600 hover:text-white transition-colors duration-300 ${className}`}
      style={style}
    >
      <span className=" text-2xl">{icon}</span>
      <h3 className="font-semibold">{title}</h3>
    </button>
  )
}

export default NavItem
