import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql } from 'gatsby'
import Noticias from '../components/Noticias'

const noticias = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Noticias de Chiapas"
        description="Artículos Informativos y de Noticias en Turista Chiapas. Nos enfocamos principalmente en noticias de turismo en Chiapas."
      />

      <Noticias noticias={data.allStrapiNoticia.nodes} title="Noticias" />
    </Layout>
  )
}

export default noticias

export const query = graphql`
  query {
    allStrapiNoticia(
      limit: 16
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
