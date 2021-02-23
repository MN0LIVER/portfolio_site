require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Portfolio by Margot Oliver`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Home`, slug: `/` },
          { name: `Projects`, slug: `/projects` },
          { name: `About`, slug: `/about` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `2315642426`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Margot - @lekoarts/gatsby-theme-jodie`,
        short_name: `Margot`,
        description: `Portfolio website for Margot Oliver built in GatsbyJS Original Template by LekoArts`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon2-1.svg`,
            sizes: `192x192`,
            type: `image/svg`,
          },
          {
            src: `/favicon2-1.svg`,
            sizes: `512x512`,
            type: `image/svg`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}