/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Layout/Header/Header"
import Footer from "./Layout/Footer/Footer"
import AnimatePage from "./Util/AnimatePage"

import "../assets/styles/styles.scss"

const Layout = ({ children, path }) => {
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
      <Header />
      <main>
        <div className="top-fade"></div>
        {children}
        <div className="bottom-fade"></div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
