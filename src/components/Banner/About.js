import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SocialLinks from '../../constants/social_links'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import Title from './Title'
import styled from 'styled-components'

const About = (props) => {
  const defaultImage = useStaticQuery(query)
  let displayImage = defaultImage.image
  if (props.image) {
    displayImage = props.image
  }

  return (
    <Wrapper>
      <Title title={props.title || 'El Turista Chiapas'} />
      <GatsbyImage
        image={getImage(displayImage.localFile)}
        className="img"
        alt={props.title}
        title={props.title}
      />
      <p>
        {props.description || (
          <span
            dangerouslySetInnerHTML={{
              __html: 'La <b>Guía de Turismo</b> en <i>Chiapas</i>',
            }}
          />
        )}
      </p>

      <SocialLinks styleClass="banner-icons"></SocialLinks>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`
export default About

export const query = graphql`
  query {
    image: strapiMedia(
      name: { eq: "noticia-chiapas-traje-de-chiapaneca.png" }
    ) {
      name
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
