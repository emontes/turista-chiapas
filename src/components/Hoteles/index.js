import React from 'react'
import InsertaScript from '../../utilities/InsertaScript'
import Advantages from './Home/Advantages'
import Map from './Home/Map'
import OurHotelSearch from './Home/OurHotelSearch'

const Hoteles = ({ image }) => {
  return (
    <section>
      <Map />
      <Advantages />

      <OurHotelSearch />
    </section>
  )
}

export default Hoteles
