import React from 'react'
import styled from 'styled-components'
import FormSearchHotels from './FormSearchHotels'
import DestinationCard from './destination-card'
import device from '../../assets/themes/device'

const Hoteles = ({ destino1, destino2 }) => {
  return (
    <Wrapper>
      <div className="featured">
        <FormSearchHotels />
      </div>

      <DestinationCard destino={destino1} />
      <DestinationCard destino={destino2} />
    </Wrapper>
  )
}

export default Hoteles

const Wrapper = styled.section`
  display: flex;
  align-items: flex-top;
  justify-content: space-around;

  .featured {
    flex-basis: 100%;
    @media ${device.laptop} {
      flex-basis: 45%;
    }
  }
`
