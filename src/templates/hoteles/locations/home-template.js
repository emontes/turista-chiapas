import React from 'react'
import Layout from '../../../components/Layout'
import { graphql } from 'gatsby'
import Seo from '../../../components/Seo'
import { getSrc } from 'gatsby-plugin-image'
import Banner from '../../../components/Hoteles/Destination/Banner'
import NavTabs from '../../../components/Hoteles/Destination/NavTabs'
import Lista from '../../../components/Hoteles/Destination/lista-hoteles'
import SideBanner from '../../../components/Banner'

const Locations = ({ data, pageContext }) => {
  const { location, banner, image } = data.location
  const numhoteles = data.hoteles.nodes.length
  const listItems1 = {
    title: 'Hoteles en Chiapas',
    items: pageContext.destinos,
    linkTo: '',
    linkToSuffix: '.html',
  }

  return (
    <Layout linkExterno="/hoteles" seoTitle={`Hoteles en ${location.name}`}>
      <Seo
        title={`Guía de Hoteles en ${location.name}`}
        description={`Listado de hoteles en ${location.name} agrupados por categoría del hotel en ${location.name}, mostrando precios, fotos e información`}
        image={image ? getSrc(image.localFile.childImageSharp) : ''}
      />

      <Banner
        image={banner}
        vistaDesc={location.name}
        estado={location.estado.Name}
        subTitle={`${numhoteles} hoteles en `}
        title={`${location.name} Hoteles`}
      />
      <section className="section">
        <NavTabs url={data.location.slug} />
        <h3>Hoteles en {location.name}</h3>
        <div className="section-center">
          <Lista location={data.location} hoteles={data.hoteles.nodes} />
          <div>
            <SideBanner
              title={location.name}
              description="Guía de Hoteles"
              image={image ? image : ''}
              showHotelsBox={true}
              listItems1={listItems1}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Locations

export const pageQuery = graphql`
  query($id: String) {
    hoteles: allStrapiHotelHotellook(
      filter: { cityId: { eq: $id }, stars: { gt: 0 }, photoCount: { gt: 0 } }
      sort: { fields: stars, order: DESC }
    ) {
      nodes {
        ...ListaHoteles
      }
    }

    location: strapiHotelLocation(hotellookId: { eq: $id }) {
      banner {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      hotellookId
      numhoteles
      slug
      location {
        name
        latitude
        longitude
        estado {
          Name
        }
      }
    }
  }
`
