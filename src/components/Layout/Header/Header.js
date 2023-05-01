import * as React from "react"
import { Link } from "gatsby"

import MainNav from "../MainNav/MainNav"

const Header = ({ siteTitle }) => (
  <header>
    <div className="wrapper section-header">
      <Link to="/" className="site-title">
        theocodes.dev
      </Link>
      <MainNav />
    </div>
  </header>
)

export default Header
