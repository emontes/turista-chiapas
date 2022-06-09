import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import HotelesHero from '../../components/Hoteles/Home/HotelsHero'
import Hoteles from '../../components/Hoteles/Home'
import { getSrc } from 'gatsby-plugin-image'

const hoteles = ({ data }) => {
  const src = getSrc(data.image.childImageSharp)
  const metadata = data.site.siteMetadata
  return (
    <Layout
      seoTitle={`Hoteles en ${metadata.estado.name}`}
      linkExterno="/hoteles"
      heroImg={data.image}
      heroComponent={<HotelesHero topDestinos={data.topDestinos.nodes} />}
    >
      <Seo
        title={`Destinos con Hoteles en ${metadata.estado.name}`}
        description={`Encuentre el Hotel que busca con el buscador de hoteles de ${metadata.estado.name}, o con el listado de ciudades que tienen Hoteles en ${metadata.estado.name}`}
        image={src}
      />
      <Hoteles metadata={metadata} locations={data.locations.nodes} />
    </Layout>
  )
}

export default hoteles

export const query = graphql`
  query($estadoSlug: String!) {
    locations: allStrapiLocation(
      filter: {
        estado: { slug: { eq: $estadoSlug } }
        hotel_location: { slug: { ne: null } }
      }
    ) {
      nodes {
        name
        hotel_location {
          slug
          numhoteles
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }

    topDestinos: allStrapiHotelLocation(
      filter: {
        location: {
          destacado: { eq: true }
          estado: { slug: { eq: $estadoSlug } }
        }
      }
      limit: 2
      sort: { fields: numhoteles, order: DESC }
    ) {
      nodes {
        slug
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        location {
          name
        }
      }
    }

    site {
      siteMetadata {
        description
        estado {
          name
          slug
          slogan
        }
      }
    }

    image: file(relativePath: { eq: "portada-hoteles.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
