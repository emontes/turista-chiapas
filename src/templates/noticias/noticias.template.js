import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { graphql } from 'gatsby'
import Noticias from '../../components/Noticias'
import { Link } from 'gatsby'
import styled from 'styled-components'

const noticias = ({ data }) => {
  const pageInfo = data.allStrapiNoticia.pageInfo
  let nextPage
  if (pageInfo.hasNextPage) {
    nextPage = pageInfo.currentPage + 1
  }
  let previousPage
  if (pageInfo.hasPreviousPage) {
    pageInfo.currentPage === 2
      ? (previousPage = '/noticias')
      : (previousPage = `/noticias/ultimas/${pageInfo.currentPage - 1}`)
  }
  return (
    <Layout>
      <Seo
        title="Noticias de Chiapas"
        description="Artículos Informativos y de Noticias en Turista Chiapas. Nos enfocamos principalmente en noticias de turismo en Chiapas."
      />

      <Noticias
        noticias={data.allStrapiNoticia.nodes}
        title={
          pageInfo.currentPage === 1
            ? 'Últimas Noticias'
            : `Noticias Página ${pageInfo.currentPage}`
        }
      />

      {previousPage && (
        <PagButton to={previousPage}>« Artículos mas recientes</PagButton>
      )}
      {nextPage && (
        <PagButton to={`/noticias/ultimas/${nextPage}`}>
          Artículos mas antigüos »
        </PagButton>
      )}
    </Layout>
  )
}

export default noticias

const PagButton = styled(Link)`
  border: 1px solid var(--clr-grey-5);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  padding: 1rem;
  background: var(--clr-white);

  margin-right: 1.5rem;
  transition: var(--transition);
  :hover {
    background: var(--clr-grey-5);
    box-shadow: var(--dark-shadow);
  }
`

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
