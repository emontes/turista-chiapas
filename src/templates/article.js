import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Article = ({ data }) => {
  const article = data.strapiNoticia
  console.log('Article ---->', article)
  return (
    <Layout>
      <Wrapper className="cont-area">
        {article.topic && (
          <spann classNaem="category">{article.topic.title}</spann>
        )}
        <h1>{article.title}</h1>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.article`
  .category {
    color: var(--clr-white);
    border-radius: var(--radius);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  h1 {
    margin: 1.25rem 0;
    font-size: 1.9rem;
    font-weight: 400;
  }
`

export const pageQuery = graphql`
  query($id: String) {
    strapiNoticia(slug: { eq: $id }) {
      id
      slug
      title
      date(formatString: "dd D MMM yy", locale: "es")
      topics {
        Title
        slug
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
      hometext {
        data {
          hometext
        }
      }

      bodytext {
        data {
          bodytext
        }
      }
    }
  }
`

export default Article
