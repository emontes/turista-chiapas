import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import { FaRegClock } from 'react-icons/fa'

const NoticiaCard = ({ noticia }) => {
  const topic = noticia.topics[0]
  const fecha = new Date(noticia.datePlano)
  const anyo = fecha.getFullYear()
  const hometext = noticia.hometext.data.hometext

  let imagen
  if (topic) {
    if (topic.image) {
      imagen = topic.image.localFile
    }
  }

  if (noticia.image) {
    imagen = noticia.image.localFile
  }

  return (
    <Wraper className="cont-area">
      <Link to={`/${noticia.dateslug}/${noticia.slug}`}>
        <h3>{noticia.title}</h3>

        {imagen && (
          <GatsbyImage
            image={getImage(imagen)}
            className="topic-image"
            alt={topic.Title}
            title={topic.Title}
          />
        )}

        {anyo < 2018 ? (
          <div dangerouslySetInnerHTML={{ __html: hometext }} />
        ) : (
          <>
            <ReactMarkdown children={hometext} />
          </>
        )}

        <footer>
          <span className="date">
            <FaRegClock className="icon"></FaRegClock>
            {noticia.date}
          </span>
          {noticia.location && (
            <span className="category">{noticia.location.name}</span>
          )}
        </footer>
      </Link>
    </Wraper>
  )
}

const Wraper = styled.article`
  position: relative;
  border: 1px solid var(--clr-grey-9);
  margin-bottom: 1.5rem;
  padding: 2rem;
  box-shadow: var(--light-shadow);
  background-color: var(--clr-grey-10);
  border-radius: var(--radius);
  transition: var(--transition);
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.3rem;
  }

  :hover {
    background-color: var(--clr-white);
    box-shadow: var(--dark-shadow);
  }

  .topic-image {
    width: 116px;
    border-radius: var(--radius);
    float: left;
    margin-right: 1rem;
  }

  .category {
    background: var(--clr-grey-9);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
  }
  footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-grey-9);
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
`

export const query = graphql`
  fragment NoticiaCard on STRAPI_NOTICIA {
    id
    slug
    title
    date(formatString: "ddd D MMM yy", locale: "es")
    dateslug: date(formatString: "yy/M")
    datePlano: date
    image {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    hometext {
      data {
        hometext
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
`

export default NoticiaCard
