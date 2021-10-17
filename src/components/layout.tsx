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
import Intro from "./Intro"

type Props = {
  children: React.ReactNode
  heading?: string
}

const Layout = ({ children, heading }: Props) => {
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
      <section className="p-4 sm:py-6 lg:py-10">
        <Intro />
      </section>
      <div className="relative max-w-screen-lg mx-4 lg:mx-auto pb-10">
        <div className="flex lg:px-4">
          <div className="hidden md:block">
            <Nav />
          </div>
          <main className="relative flex-1 md:ml-4 bg-white p-10">
            {children}
          </main>
        </div>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
