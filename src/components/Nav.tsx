import { navigate } from "gatsby"
import React from "react"
import { NavItem } from "./Buttons"

const Nav = () => {
  const changeRoute = (path: string): void => {
    console.log(path)
    navigate(path)
  }

  return (
    <aside className="w-32">
      <ul>
        <li>
          <NavItem onClick={changeRoute.bind(null, "/")}>Home</NavItem>
        </li>

        <li>
          <NavItem onClick={changeRoute.bind(null, "/works")}>Works</NavItem>
        </li>

        <li>
          <NavItem onClick={changeRoute.bind(null, "/resume")}>Resume</NavItem>
        </li>

        <li>
          <NavItem onClick={changeRoute.bind(null, "/contact")}>
            Contact
          </NavItem>
        </li>
      </ul>
    </aside>
  )
}

export default Nav
