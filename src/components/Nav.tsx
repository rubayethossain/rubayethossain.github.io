import { navigate } from "gatsby"
import React from "react"
import PATHS from "../const/path"
import { NavItem } from "./Buttons"

const Nav = () => {
  const location =
    typeof window !== "undefined" ? window.location.pathname : "/"
  const changeRoute = (path: string): void => {
    navigate(path)
  }

  return (
    <aside>
      <ul>
        <li>
          <NavItem
            onClick={changeRoute.bind(null, PATHS.HOME)}
            icon={<i className="flaticon-id-card"></i>}
            className="mb-3"
            title="Home"
            active={location === PATHS.HOME}
          />
        </li>

        <li>
          <NavItem
            onClick={changeRoute.bind(null, PATHS.WORKS)}
            icon={<i className="flaticon-working"></i>}
            className="mb-3"
            title="Works"
            active={location === PATHS.WORKS}
          />
        </li>

        <li>
          <NavItem
            onClick={changeRoute.bind(
              null,
              "https://docs.google.com/document/d/1oiaS8ZktDhQN_OPtx9MwchIo_5txLO5vHtSHFPcpt4Y/export?format=pdf"
            )}
            icon={<i className="flaticon-online-resume"></i>}
            className="mb-3"
            title="Resume"
          />
        </li>

        <li>
          <NavItem
            onClick={changeRoute.bind(null, PATHS.CONTACT)}
            icon={<i className="flaticon-communicate"></i>}
            title="Contact"
            active={location === PATHS.CONTACT}
          />
        </li>
      </ul>
    </aside>
  )
}

export default Nav
