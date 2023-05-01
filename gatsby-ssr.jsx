/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

const React = require("react")
const Layout = require("./src/components/layout").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/RadwaveFont_Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="radwaveRegularFont"
    />,
    <link
      rel="preload"
      href="/fonts/RadwaveFont_Outline.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="radwaveOutlineFont"
    />,
    <link
      rel="preload"
      href="/fonts/ArcadeClassic.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="arcadeClassicFont"
    />,
  ])
}
