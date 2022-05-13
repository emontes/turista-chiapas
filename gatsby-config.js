require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['estado', 'location', 'noticia', 'topic'],
  singleTypes: [],
}

module.exports = {
  siteMetadata: {
    title: 'El Turista Chiapas',
    description:
      'El Turista Chiapas cuenta con las herramientas necesarias para que los turistas puedan planear su viaje por Chiapas.',
    titleTemplate: `%s | Turista Chiapas`,
    siteUrl: `https://chiapas.turista.com.mx`,
    twitterUsername: `@turistamexico`,
    // image: `/desarrollador-web.jpg`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-693957-18',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
}
