import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import NoticiasList from '../components/Noticias/noticias-list'
import Banner from '../components/Banner'
import InsertaScript from '../Complete/InsertaScript'
import Seo from '../components/Seo'

const index = ({ data }) => {
  const liga =
    '//tp.media/content?0=0&1=10&currency=mxn&promo_id=4285&shmarker=182367&campaign_id=101&trs=29063&search_host=jet.turista.com.mx%2Fhotels&locale=es&draggable=true&disable_zoom=false&show_logo=true&scrollwheel=false&color=%2307AF61&contrast_color=%23ffffff&width=800&height=500&zoom=7&radius=60&stars=0%2C1%2C2%2C3%2C4%2C5&price_from=&price_to=&lat=16.75&lng=-92.633333'
  return (
    <Layout heroImg={data.image.childImageSharp}>
      <Seo title="Home" />
      <section className="section">
        <div className="section-center">
          <div className="cont-area">
            <h3 className="section-title">¿Conoces Chiapas?</h3>

            <InsertaScript liga={liga} />
            <br />
            <p>
              <b>Chiapas</b> es auténtico por naturaleza. Chiapas es y ha sido
              siempre la última frontera, un estado que no puedes dejar de
              visitar.
            </p>
            <p>
              El Turista Chiapas cuenta con las herramientas necesarias para que
              los turistas puedan planear su viaje por Chiapas.
            </p>
          </div>
          <Banner />
        </div>
      </section>
      <section className="section">
        <div className="section-center">
          <NoticiasList noticias={data.allStrapiNoticia.nodes} />
          <div className="cont-area">
            <h2>el contenido</h2>
          </div>
        </div>
      </section>
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
