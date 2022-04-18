const rnd = () => Math.random().toString(36).substring(2, 3)

module.exports = {
  /*
  Experimental flags that increase DX and build times with different technics (may require to use `yarn clean` time to time)
  Current avaliable flags: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  */
  // flags: {
  //   FAST_DEV: true,
  // },
  trailingSlash: 'never',
  polyfill: false,
  siteMetadata: {
    title: `Save Ukrainian Culture`,
    description: `Unique Ukrainian culture is an integral part of the world cultural heritage. There are 7 UNESCO World Heritage Sites in Ukraine, while another 17 properties are in the Tentative List of the World Cultural Heritage.`,
    siteUrl: `https://${process.env.GATSBY_VERCEL_URL || 'mincult.salex.pro'}`,
  },
  plugins: [
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-webpack-bundle-analyser-v2/
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        enable: process.env.GATSBY_VERCEL_ENV === 'production',
        prefix: rnd(),
        suffix: rnd(),
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `@gvrs/gatsby-transformer-blurhash`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-svgr-svgo`,
      options: {
        urlSvgOptions: [
          {
            test: /\.svg$/,
            urlLoaderOptions: {
              limit: 10,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
