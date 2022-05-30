import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import BannnerAdsense from '../../utilities/BannerAdsense'
import { getSrc } from 'gatsby-plugin-image'
import Links from '../../components/Links'

const Directorio = ({ data, pageContext }) => {
  return (
    <Layout
      heroImg={data.image.localFile.childImageSharp}
      main="Directorio"
      sub="de sitios Web en Chiapas"
      seoTitle="Directorio Web"
      linkExterno="/links.html"
    >
      <Seo
        title="Directorio Web"
        description="Directorio de Sitios Web Registrados en el Turista Chiapas y que tienen relación directa con Chiapas"
        image={getSrc(data.image.localFile.childImageSharp)}
      />
      <Links
        title="Directorio del Turista Chiapas"
        subtitle="Bienvenido a nuestro directorio"
        linksCategories={pageContext.linksRoot}
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
