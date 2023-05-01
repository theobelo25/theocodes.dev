import React, { useEffect, useState } from "react"

import Seo from "../components/seo"
import LandingHero from "../components/Layout/LandingHero/LandingHero"
import AnimatePage from "../components/Util/AnimatePage"

const IndexPage = () => {
  return (
    <AnimatePage>
      <div className="landing-page">
        <LandingHero />
      </div>
    </AnimatePage>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
