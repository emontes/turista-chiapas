import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaRegClock, FaPrint } from 'react-icons/fa'
import { Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'

const Article = ({ data }) => {
  console.log('  Data Article --->', data)
  const {
    title,
    datePlano,
    date,
    location,
    topics,
    hometext,
    bodytext,
    image,
  } = data.strapiNoticia
  const fecha = new Date(datePlano)
  const anyo = fecha.getFullYear()
  return (
    <Layout>
      <Wrapper className="cont-area">
        <article>
          <div className="post-info">
            {location && <span className="category">{location.name}</span>}

            <h1>{title}</h1>

            <div className="date-box">
              <span className="date">
                <FaRegClock className="icon"></FaRegClock>
                {date}
              </span>
              <span className="date">
                <Link
                  to={`/printarticle-${data.strapiNoticia.strapiId}.html`}
                  title="Versión para Imprimir"
                >
                  <FaPrint className="icon" />
                </Link>
              </span>
            </div>

            <div className="underline"></div>
          </div>
          {image && (
            <GatsbyImage
              image={getImage(image.localFile)}
              className="image"
              alt={title}
              title={title}
            />
          )}
          {anyo < 2018 ? (
            <>
              <div
                dangerouslySetInnerHTML={{ __html: hometext.data.hometext }}
              />

              <p dangerouslySetInnerHTML={{ __html: bodytext.data.bodytext }} />
            </>
          ) : (
            <>
              <ReactMarkdown source={hometext} />

              <ReactMarkdown source={bodytext} />
            </>
          )}
        </article>
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            className="category topic"
            to={`/noticias/tema/${topic.slug}`}
          >
            {topic.Title}
          </Link>
        ))}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .category {
    color: var(--clr-white);
    background: var(--clr-grey-4);
    border-radius: var(--radius);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .topic {
    background: var(--clr-grey-8);
    margin-right: 1rem;
  }
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;

    h1 {
      margin: 1.25rem 0;
      font-size: 1.9rem;
      font-weight: 400;
    }

    .date-box {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--clr-grey-5);

      & .date {
        display: flex;
        align-items: center;
        & .icon {
          color: var(--clr-primary-5);
          margin-right: 0.5rem;
        }
      }
    }
  }

  .image {
    width: 100%;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  p {
    color: var(--clr-grey-5);
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 1rem auto;
    margin-bottom: 1rem;
  }

  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
`

export const pageQuery = graphql`
  query($id: String) {
    strapiNoticia(id: { eq: $id }) {
      id
      slug
      title
      date(formatString: "dd D MMM yy", locale: "es")
      dateslug: date(formatString: "yy/M/D")
      datePlano: date
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
    }
  }
`

export default Article
