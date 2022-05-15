import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import NoticiasList from '../components/Noticias/noticias-list'

const index = ({ data }) => {
  return (
    <Layout heroImg={data.image.childImageSharp}>
      <div className="cont-area" style={{ marginTop: '2rem' }}>
        <h1>Bienvenido al Turista Chiapas</h1>

        <p>
          El Turista Chiapas cuenta con las herramientas necesarias para que los
          turistas puedan planear su viaje por Chiapas.
        </p>
      </div>
      <NoticiasList noticias={data.allStrapiNoticia.nodes} />
    </Layout>
  )
}

export default index

export const query = graphql`
  query {
    allStrapiNoticia(
      limit: 10
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
