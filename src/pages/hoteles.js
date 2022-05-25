import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hoteles from '../components/Hoteles'
import Advantages from '../components/Hoteles/Advantages'
import Map from '../components/Hoteles/Map'
import OurHotelSearch from '../components/Hoteles/OurHotelSearch'
import { getSrc } from 'gatsby-plugin-image'

const hoteles = ({ data }) => {
  const src = getSrc(data.image.localFile.childImageSharp)
  return (
    <Layout seoTitle="Hoteles en Chiapas" linkExterno="/hoteles">
      <Seo
        title="Destinos con Hoteles en Chiapas"
        description="Encuentre el Hotel que busca con el buscador de hoteles, o con le listado de ciudades que tienen Hoteles en Chiapas"
        image={src}
      />
      <Hoteles image={data.image.localFile.childImageSharp} />
      <Advantages />
      <Map />
      <OurHotelSearch />
    </Layout>
  )
}

export default hoteles

export const query = graphql`
  query {
    image: strapiMedia(
      name: { eq: "noticia-chiapas-jardin-arte-sancris13.jpg" }
    ) {
      name
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
