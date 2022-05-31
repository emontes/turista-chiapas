require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    'hotel-location',
    'estado',
    'location',
    'noticia',
    'topic',
    'section',
    'section-article',
    'link',
    'link-category',
  ],
  singleTypes: [],
}

module.exports = {
  siteMetadata: {
    title: 'El Turista Chiapas',
    description:
      'El Turista Chiapas cuenta con las herramientas necesarias para que los turistas puedan planear su viaje por Chiapas.',
    titleTemplate: `%s | Turista Chiapas`,
    url: `https://chiapas.turista.com.mx`,
    siteUrl: `https://chiapas.turista.com.mx`,
    twitterUsername: `@turistamexico`,
    image: `/portada-chiapas-1.jpg`,
  },
  plugins: [
    'gatsby-plugin-htaccess', // Para que haga las redirecciones en Apache2
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-693957-11',
      },
    },
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
    {
      resolve: 'gatsby-plugin-social9-socialshare',
      options: {
        content: 'ae9c46e812cc4d8db2c068957c7c140b',
        async: true,
        defer: true,
      },
    },
  ],
}
