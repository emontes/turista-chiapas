import React from 'react'
import Layout from '../../../components/Layout'
import { graphql } from 'gatsby'
import Seo from '../../../components/Seo'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import Banner from '../../../components/Hoteles/Destination/Banner'
import NavTabs from '../../../components/Hoteles/Destination/NavTabs'
import Lista from '../../../components/Hoteles/Destination/lista-hoteles'

const Locations = ({ data }) => {
  const { location, banner, image } = data.location
  const numhoteles = data.hoteles.nodes.length
  return (
    <Layout linkExterno="/hoteles" seoTitle={`Hoteles en ${location.name}`}>
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
        <Lista location={data.location} hoteles={data.hoteles.nodes} />
      </section>

      {image && (
        <GatsbyImage
          image={getImage(image.localFile)}
          className="image"
          alt={location.name}
          title={location.name}
        />
      )}
    </Layout>
  )
}

export default Locations

export const pageQuery = graphql`
  query($id: String) {
    hoteles: allStrapiHotelHotellook(
      filter: { cityId: { eq: $id }, pricefrom: { gt: 0 } }
      sort: { fields: pricefrom, order: ASC }
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
