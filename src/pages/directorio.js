import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import BannnerAdsense from '../utilities/BannerAdsense'

const Directorio = ({ data }) => {
  return (
    <Layout
      heroImg={data.image.localFile.childImageSharp}
      main="Directorio"
      sub="de sitios Web en Chiapas"
    >
      <Seo
        title="Directorio Web"
        description="Directorio de Sitios Web Registrados en el Turista Chiapas y que tienen relación directa con Chiapas"
      />

      <BannnerAdsense />
    </Layout>
  )
}

export default Directorio

export const query = graphql`
  query {
    image: strapiMedia(name: { eq: "topic-historias.jpg" }) {
      name
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
