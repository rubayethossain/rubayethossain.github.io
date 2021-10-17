import React from "react"
interface Props {
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
  icon: JSX.Element
  title: string
  active?: boolean
}

const NavItem = ({ title, onClick, className, style, icon, active }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-24 h-24 bg-white hover:text-indigo-500 transition-colors duration-300 rounded border-2 border-indigo-500 ${
        active && "text-indigo-500"
      } ${className}`}
      style={style}
    >
      <span className=" text-2xl">{icon}</span>
      <h3 className="font-semibold">{title}</h3>
    </button>
  )
}

export default NavItem
