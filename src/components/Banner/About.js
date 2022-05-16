import React from 'react'
import SocialLinks from '../../constants/social_links'
import { StaticImage } from 'gatsby-plugin-image'
import Title from './Title'
import styled from 'styled-components'

const About = (props) => {
  return (
    <Wrapper>
      <Title title={props.title || 'El Turista Chiapas'} />
      <StaticImage
        src="../../assets/images/portada-chiapas-1.jpg"
        alt="Turista Chiapas"
        title="Turista Chiapas"
        className="img"
      />
      <p>
        {props.description || (
          <span
            dangerouslySetInnerHTML={{
              __html:
                "La <b>Guía de Chiapas</b> por <a href='https://turista.com.mx'>Turista México</a>",
            }}
          />
        )}
      </p>
      {/* <SocialLinks styleClass="banner-icons"></SocialLinks> */}
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
