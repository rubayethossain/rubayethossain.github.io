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
    <aside>
      <ul>
        <li>
          <NavItem
            onClick={changeRoute.bind(null, "/")}
            icon={faDiceD6}
            className="mb-3"
            title="Home"
          />
        </li>

        <li>
          <NavItem
            onClick={changeRoute.bind(null, "/works")}
            icon={faCode}
            className="mb-3"
            title="Works"
          />
        </li>

        <li>
          <NavItem
            onClick={changeRoute.bind(null, "/resume")}
            icon={faAddressCard}
            className="mb-3"
            title="Resume"
          />
        </li>

        <li>
          <NavItem
            onClick={changeRoute.bind(null, "/contact")}
            icon={faEnvelope}
            title="Contact"
          />
        </li>
      </ul>
    </aside>
  )
}

export default Nav
