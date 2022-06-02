import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import device from '../../../assets/themes/device'

const Card = ({ destino }) => {
  return (
    <Wrapper to={`/${destino.slug}`}>
      <div className="card-image">
        <GatsbyImage
          image={getImage(destino.image.localFile)}
          className="img"
          alt={`Hoteles en ${destino.location.name}`}
          title={`Hoteles en ${destino.location.name}`}
        />
      </div>

      <div className="card-title">{destino.location.name.substring(0, 13)}</div>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled(Link)`
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: var(--clr-grey-3);
  border-radius: 20px;
  box-shadow: var(--light-shadow);
  color: var(--clr-white);
  transition: var(--transition);
  display: none;
  flex-basis: 25%;
  @media ${device.laptop} {
    display: block;
  }
  @media ${device.laptopL} {
    flex-basis: 15%;
  }
  :hover {
    box-shadow: var(--dark-shadow);
    color: var(--clr-primary-7);
  }

  .card-title {
    font-size: 2rem;
    text-align: center;
    padding: 1rem;
  }
  .card-image {
    background-color: var(--clr-primary-6);
    overflow: hidden;

    .img {
      display: block;
      border-radius: 2px 2px 0 0;
      position: relative;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;

      :hover {
        transition: var(--transition);
        opacity: 0.9;
        transform: scale(1.1);
      }
    }
  }
`
