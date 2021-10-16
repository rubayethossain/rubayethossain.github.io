import { navigate } from "gatsby"
import React from "react"
import { NavItem } from "./Buttons"

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
            icon={<i className="flaticon-id-card"></i>}
            className="mb-3"
            title="Home"
          />
        </li>

        <li>
          <NavItem
            onClick={changeRoute.bind(null, "/works")}
            icon={<i className="flaticon-working"></i>}
            className="mb-3"
            title="Works"
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
            onClick={changeRoute.bind(null, "/contact")}
            icon={<i className="flaticon-communicate"></i>}
            title="Contact"
          />
        </li>
      </ul>
    </aside>
  )
}

export default Nav
