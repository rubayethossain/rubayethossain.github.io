import * as React from "react"
import { Link } from "gatsby"

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header className="bg-green-500">
    <div className="mx-auto max-w-screen-lg py-6">
      <h1 className="m-0 text-xl font-semibold">
        <Link to="/" className="text-white no-underline">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
