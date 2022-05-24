import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import BannnerAdsense from '../utilities/BannerAdsense'
import { getSrc } from 'gatsby-plugin-image'

const Informacion = ({ data }) => {
  return (
    <Layout
      heroImg={data.image.localFile.childImageSharp}
      main="Información"
      sub="sobre Chiapas"
    >
      <Seo
        title="Información de Chiapas"
        description="Artículos Informativos sobre el Estado de Chiapas, México"
        image={getSrc(data.image.localFile.childImageSharp)}
      />

      <BannnerAdsense />
    </Layout>
  )
}

export default Informacion

export const query = graphql`
  query {
    image: strapiMedia(name: { eq: "topic-informacion.jpg" }) {
      name
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
