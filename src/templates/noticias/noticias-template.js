import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { graphql } from 'gatsby'
import Noticias from '../../components/Noticias'

const noticias = ({ data }) => {
  const pageInfo = data.allStrapiNoticia.pageInfo

  let titleSeo = 'Noticias de Chiapas'
  let descriptionSeo =
    'Artículos Informativos y de Noticias en Turista Chiapas. Nos enfocamos principalmente en noticias de turismo en Chiapas.'
  if (pageInfo.currentPage > 1) {
    titleSeo = titleSeo + ' Página. ' + pageInfo.currentPage
    descriptionSeo = 'Página ' + pageInfo.currentPage + ' de ' + descriptionSeo
  }
  return (
    <Layout>
      <Seo title={titleSeo} description={descriptionSeo} />

      <Noticias
        noticias={data.allStrapiNoticia.nodes}
        title={titleSeo}
        description={descriptionSeo}
        pageInfo={pageInfo}
        url="/noticias/ultimas"
      />
    </Layout>
  )
}

export default noticias

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiNoticia(
      limit: $limit
      skip: $skip
      filter: { estado: { slug: { eq: "chiapas" } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        ...NoticiaCard
      }
      pageInfo {
        pageCount
        itemCount
        perPage
        totalCount
        hasPreviousPage
        hasNextPage
        currentPage
      }
    }

    image: file(relativePath: { eq: "portada-chiapas-1.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
