import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql } from 'gatsby'
import NoticiasList from '../components/Noticias/noticias-list'
import Banner from '../components/Banner/indexNoticias'

const noticias = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Noticias de Chiapas"
        description="Artículos Informativos y de Noticias en Turista Chiapas. Nos enfocamos principalmente en noticias de turismo en Chiapas."
      />
      <section className="section">
        <h3 className="section-title">Últimas Noticias de Chiapas</h3>
        <div className="section-center">
          <NoticiasList noticias={data.allStrapiNoticia.nodes} />

          <div
            className="cont-area"
            style={{ background: 'var(--clr-grey-10)' }}
          >
            <Banner />
          </div>
        </div>
      </section>
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
