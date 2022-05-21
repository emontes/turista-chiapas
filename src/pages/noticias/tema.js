import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'

import ButtonPages from '../../components/Noticias/ButtonPages'
const Tema = ({ data }) => {
  const topics = data.allStrapiNoticia.distinct
  return (
    <Layout>
      <Seo
        title="Temas de Noticias en Turista Chiapas"
        description="Muestra los diferentes temas de noticias que se encuentran registrados en Turista Chiapas."
      />
      <div
        className="cont-area"
        style={{
          padding: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {topics.map((item) => (
          <p key={item}>
            <ButtonPages url={item} description={item} />
          </p>
        ))}
      </div>
    </Layout>
  )
}

export default Tema

export const query = graphql`
  {
    allStrapiNoticia(filter: { estado: { Name: { eq: "Chiapas" } } }) {
      distinct(field: topics___slug)
    }
  }
`
