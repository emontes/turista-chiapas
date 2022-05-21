import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaRegClock } from 'react-icons/fa'
import { Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Banner from '../../components/Banner/indexNoticias'
import Seo from '../../components/Seo'

const Article = ({ data }) => {
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
      <Seo title={title} description={hometext.data.hometext} />
      <Wrapper className="section">
        <div className="section-center">
          <article className="cont-area">
            <div className="post-info">
              {location && <span className="category">{location.name}</span>}

              <h1>{title}</h1>

              <div className="date-box">
                <span className="date">
                  <FaRegClock className="icon"></FaRegClock>
                  {date}
                </span>

                <div class="s9-widget-wrapper"></div>
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
                {hometext && (
                  <div
                    dangerouslySetInnerHTML={{ __html: hometext.data.hometext }}
                  />
                )}
                {bodytext && (
                  <p
                    dangerouslySetInnerHTML={{ __html: bodytext.data.bodytext }}
                  />
                )}
              </>
            ) : (
              <>
                <ReactMarkdown children={hometext.data.hometext} />

                <ReactMarkdown children={bodytext.data.bodytext} />
              </>
            )}
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                className="category topic"
                to={`/noticias/tema/${topic.slug}`}
              >
                {topic.Title}
              </Link>
            ))}
          </article>
          <div
            className="cont-area"
            style={{ background: 'var(--clr-grey-10)' }}
          >
            <Banner title="Noticia" />
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
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
