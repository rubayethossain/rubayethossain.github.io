/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./Nav"

type Props = {
  children: React.ReactNode
  heading?: string
  topSection?: React.ReactNode
}

const Layout = ({ children, heading, topSection }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {heading && (
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      )}
      {topSection && <section>{topSection}</section>}
      <div className="relative max-w-screen-lg mx-auto">
        <div className="flex">
          <Nav />
          <main className="relative flex-1 ml-10 bg-white p-10">
            {children}
          </main>
        </div>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
