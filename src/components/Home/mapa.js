import React from 'react'
import Banner from '../Banner'
import InsertaScript from '../../utilities/InsertaScript'
import styled from 'styled-components'

const Mapa = () => {
  const liga =
    '//tp.media/content?0=0&1=10&currency=mxn&promo_id=4285&shmarker=182367&campaign_id=101&trs=29063&search_host=jet.turista.com.mx%2Fhotels&locale=es&draggable=true&disable_zoom=false&show_logo=true&scrollwheel=false&color=%2307AF61&contrast_color=%23ffffff&width=800&height=500&zoom=7&radius=60&stars=0%2C1%2C2%2C3%2C4%2C5&price_from=&price_to=&lat=16.75&lng=-92.633333'
  return (
    <Wrapper className="section">
      <div className="section-center">
        <div className="mapa-container">
          <h2 className="section-title">¿Conoces Chiapas?</h2>
          <div className="mapa">
            <InsertaScript liga={liga} />
          </div>
          <div>
            <p>
              <b>Chiapas</b> es auténtico por naturaleza. Chiapas es y ha sido
              siempre la última frontera, un estado que no puedes dejar de
              visitar.
            </p>
            <p>
              El Turista Chiapas cuenta con las herramientas necesarias para que
              los turistas puedan planear su viaje por Chiapas.
            </p>
          </div>
        </div>
        <Banner />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-white);
  padding: 1rem;
  h2 {
    margin: 1.5rem;
    font-size: 1.9rem;
    text-align: center;
  }
  .mapa-container {
    display: none;
    @media screen and (min-width: 1170px) {
      display: block;
    }
  }
  .mapa {
    width: 800px;
    margin: 0 auto 1.5rem;
  }
`

export default Mapa
