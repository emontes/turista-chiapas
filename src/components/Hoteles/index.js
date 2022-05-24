import React from 'react'
import InsertaScript from '../../utilities/InsertaScript'

const Hoteles = ({ image }) => {
  const liga =
    '//www.travelpayouts.com/widgets/aaff9e1c12195d0a95de1c140e9b46ce.js?v=2190'
  return (
    <section style={{ background: 'var(--clr-white)', padding: '2rem' }}>
      <InsertaScript liga={liga} />
    </section>
  )
}

export default Hoteles
