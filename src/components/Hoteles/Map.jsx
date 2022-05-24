import React from 'react'
import styled from 'styled-components'
import InsertaScript from '../../utilities/InsertaScript'
import Title from '../Title'

const liga =
  '//tp.media/content?0=0&1=10&currency=mxn&promo_id=4285&shmarker=182367&campaign_id=101&trs=29063&search_host=jet.turista.com.mx%2Fhotels&locale=es&draggable=true&disable_zoom=false&show_logo=false&scrollwheel=false&color=%2307AF61&contrast_color=%23ffffff&width=800&height=500&zoom=7&radius=60&stars=0%2C1%2C2%2C3%2C4%2C5&price_from=&price_to=&lat=16.75&lng=-92.633333'
const liga2 =
  '//www.travelpayouts.com/chansey/iframe.js?v=1&marker=182367&host=jet.turista.com.mx%2Fhotels&locale=es&currency=mxnd&nobooking=&powered_by=false&hotel_id=685196'
const Map = () => {
  return (
    <Wrapper>
      <Title title="Encuentra tu Hotel" subtitle="en el Mapa" />
      <div className="map">
        <InsertaScript liga={liga} noAsync={true} />
        <InsertaScript liga={liga2} />
      </div>
    </Wrapper>
  )
}

export default Map

const Wrapper = styled.section`
  display: none;
  padding: 4rem 0;
  background: var(--clr-grey-10);
  @media screen and (min-width: 992px) {
    display: block;
  }
  .map {
    width: 800px;
    margin: auto;
    border: 1px solid var(--clr-grey-8);
    box-shadow: var(--light-shadow);
  }
`
