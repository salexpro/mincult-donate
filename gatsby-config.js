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
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `ua`,
        // locales: process.env.LOCALES || `ru ua`,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./i18n/react-i18next`,
        i18nextOptions: {
          ns: [
            'base',
            'hero',
            'about',
            'culture',
            'quotes',
            'faq',
            'footer',
            'donate',
          ],
        },
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-8579T4ZL9S'],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: 'OPT_CONTAINER_ID',
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        // pluginConfig: {
        //   // Puts tracking script in the head instead of the body
        //   head: false,
        //   // Setting this parameter is also optional
        //   respectDNT: true,
        //   // Avoids sending pageview hits from custom paths
        //   exclude: ['/preview/**', '/do-not-track/me/too/'],
        // },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
