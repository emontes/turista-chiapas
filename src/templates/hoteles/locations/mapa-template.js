import React from 'react'
import Layout from '../../../components/Layout'
import { graphql } from 'gatsby'
import Seo from '../../../components/Seo'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import Banner from '../../../components/Hoteles/Destination/Banner'
import Map from '../../../components/Hoteles/Destination/Map'
import NavTabs from '../../../components/Hoteles/Destination/NavTabs'

const Locations = ({ data }) => {
  const { location, banner, image, numhoteles } = data.location
  return (
    <Layout linkExterno="/hoteles" seoTitle={`Hoteles en ${location.name}`}>
      <Seo
        title={`Mapa de Hoteles en ${location.name}`}
        description={`Mapa de hoteles en ${location.name}, ${location.estado.Name}. Encuentre la ubicación ideal para su hotel en ${location.name}`}
        image={image ? getSrc(image.localFile.childImageSharp) : ''}
      />

      <Banner
        image={banner}
        vistaDesc={location.name}
        estado={location.estado.Name}
        subTitle={`${numhoteles} hoteles en`}
        title={`Mapa de Hoteles en ${location.name}`}
      />

      <section className="section">
        <NavTabs url={data.location.slug} />
        <Map location={data.location} />
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
