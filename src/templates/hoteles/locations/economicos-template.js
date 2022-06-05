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
    linkToSuffix: '-economicos.html',
  }
  return (
    <Layout
      linkExterno="/hoteles"
      seoTitle={`${location.name} Hoteles Económicos`}
    >
      <Seo
        title={`Hoteles económicos en ${location.name}`}
        description={`Encuentre hoteles económicos en ${location.name}, ${location.estado.Name} con esta lista ordenada a partir del precio más barato para su hotel en ${location.name}`}
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
        <h3>Hoteles económicos en {location.name}</h3>
        <div className="section-center">
          <Lista location={data.location} hoteles={data.hoteles.nodes} />
          <div>
            <SideBanner
              title={location.name}
              description={`Los hoteles más económicos de ${location.name},  ordenados de Menor a Mayor precio`}
              image={image ? image : ''}
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
      filter: { cityId: { eq: $id }, pricefrom: { gt: 0 } }
      sort: { fields: pricefrom, order: ASC }
      limit: 30
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
