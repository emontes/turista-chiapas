import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Noticias from '../components/Noticias'

import Seo from '../components/Seo'
import Mapa from '../components/Home/mapa'

const index = ({ data }) => {
  return (
    <Layout
      heroImg={data.image.childImageSharp}
      main="Chiapas"
      sub="El Espíritu del Mundo Maya"
    >
      <Seo title="Home" />
      <Mapa />
      <Noticias
        noticias={data.allStrapiNoticia.nodes}
        title="Últimas Noticias"
        isHome="si"
      />
    </Layout>
  )
}

export default index

export const query = graphql`
  query {
    allStrapiNoticia(
      limit: 3
      filter: { estado: { slug: { eq: "chiapas" } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        ...NoticiaCard
      }
    }

    image: file(relativePath: { eq: "portada-chiapas-1.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
