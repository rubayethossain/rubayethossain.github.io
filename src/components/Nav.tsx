import { Link } from "gatsby"
import React from "react"

interface Props {}

const Nav = (props: Props) => {
  return (
    <aside className="w-32 bg-gray-300">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/">Works</Link>
        </li>

        <li>
          <Link to="/">Resume</Link>
        </li>

        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Nav
