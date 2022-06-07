import React from 'react'
import Advantages from './Advantages'
import Map from './Map'
import OurHotelSearch from './OurHotelSearch'
import ListaLocations from './location-list'

const Hoteles = ({ locations }) => {
  console.log('Locations en hoteles/home/index: ', locations)
  return (
    <section>
      <Map />
      <ListaLocations locations={locations} />
      <Advantages />

      <OurHotelSearch />
    </section>
  )
}

export default Hoteles
