/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["project", "work-experience", "education", "skill"],
  singleTypes: ["contact-info"],
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "https://www.theocodes.dev/",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
}

module.exports = {
  siteMetadata: {
    title: `theocodes.dev`,
    description: `My personal portfolio site. Thank you for visiting!`,
    author: `@theobelo25`,
    siteUrl: `https://www.theocodes.dev`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `files`,
        // Path to the directory
        path: `${__dirname}/src/assets/files/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/command-line-icon-7.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // url: API URL to use. Defaults to  https://api.github.com/graphql
        url: "https://api.github.com/graphql",

        // token: required by the GitHub API
        token: process.env.GITHUB_TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: `
          query {
            user(login: "theobelo25") {
              repositories(last: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
                nodes {
                  id
                  name
                  url
                  description
                  homepageUrl
                }
              }
            }
          }
        `,
      },
    },
  ],
}
