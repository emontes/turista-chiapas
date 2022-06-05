import React from 'react'
import { graphql } from 'gatsby'

const Lista = ({ hoteles }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Hotel</th>
            <th>Dirección</th>
            <th>Estrellas</th>
            <th>Cuartos</th>

            <th>*Precio</th>
          </tr>
          {hoteles.map((hotel) => {
            return (
              <tr key={hotel.strapi_id}>
                <td>
                  <a
                    href={`https://jet.turista.com.mx${hotel.link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {hotel.name.en}
                  </a>
                </td>
                <td>{hotel.address.en}</td>
                <td>{hotel.stars > 0 && hotel.stars}</td>
                <td>{hotel.cntRooms}</td>

                <td style={{ textAlign: 'right' }}>
                  {hotel.pricefrom
                    ? new Intl.NumberFormat('es-MX', {
                        style: 'currency',
                        currency: 'MXN',
                      }).format(hotel.pricefrom * 22)
                    : ''}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <br />
      <p>
        * Tarifas para reservar hoteles en Tuxtla Gutiérrez listadas en Pesos
        Mexicanos basado en el costo promedio más económico (antes de impuestos)
        por noche.
        <br />
        ** Los precios son solamente de referencia y varían, para saber el
        precio exacto debe hacer click en el Hotel que le parezca más atractivo.
      </p>
    </>
  )
}

export default Lista

export const query = graphql`
  fragment ListaHoteles on STRAPI_HOTEL_HOTELLOOK {
    strapi_id
    cityId
    name {
      en
      es
    }
    address {
      en
    }
    stars
    propertyType
    yearOpened
    yearRenovated
    rating
    pricefrom
    popularity
    distance
    cntSuites
    cntRooms
    cntFloors
    checkIn
    checkOut
    link
    location {
      lat
      lon
    }
    facilities {
      strapi_json_value
    }
    photos {
      strapi_json_value {
        url
      }
    }
  }
`
