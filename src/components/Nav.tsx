import { navigate } from "gatsby"
import React from "react"
import { NavItem } from "./Buttons"
import {
  faDiceD6,
  faCode,
  faAddressCard,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
  const changeRoute = (path: string): void => {
    console.log(path)
    navigate(path)
  }

  return (
    <aside className="w-32">
      <ul>
        <li>
          <NavItem onClick={changeRoute.bind(null, "/")} icon={faDiceD6}>
            Home
          </NavItem>
        </li>

        <li>
          <NavItem onClick={changeRoute.bind(null, "/works")} icon={faCode}>
            Works
          </NavItem>
        </li>

        <li>
          <NavItem
            onClick={changeRoute.bind(null, "/resume")}
            icon={faAddressCard}
          >
            Resume
          </NavItem>
        </li>

        <li>
          <NavItem
            onClick={changeRoute.bind(null, "/contact")}
            icon={faEnvelope}
          >
            Contact
          </NavItem>
        </li>
      </ul>
    </aside>
  )
}

export default Nav
