import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import HotelesHero from '../components/Hoteles/HotelsHero'
import Hoteles from '../components/Hoteles'
import { getSrc } from 'gatsby-plugin-image'

const hoteles = ({ data }) => {
  const src = getSrc(data.image.localFile.childImageSharp)
  return (
    <Layout
      seoTitle="Hoteles en Chiapas"
      linkExterno="/hoteles"
      heroImg={data.image.localFile}
      heroComponent={
        <HotelesHero destino1={data.destino1} destino2={data.destino2} />
      }
    >
      <Seo
        title="Destinos con Hoteles en Chiapas"
        description="Encuentre el Hotel que busca con el buscador de hoteles de Chiapas, o con el listado de ciudades que tienen Hoteles en Chiapas"
        image={src}
      />
      <Hoteles />
    </Layout>
  )
}

export default hoteles

export const query = graphql`
  query {
    destino1: strapiHotelLocation(strapi_id: { eq: 2 }) {
      location {
        name
      }
      slug
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }

    destino2: strapiHotelLocation(strapi_id: { eq: 5 }) {
      location {
        name
      }
      slug
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }

    image: strapiMedia(name: { eq: "chiapas-Aguaazul-reserve.jpg" }) {
      name
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
