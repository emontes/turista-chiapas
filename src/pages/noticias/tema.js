import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { Link } from 'gatsby'

const Tema = ({ data }) => {
  const topics = data.allStrapiNoticia.distinct
  return (
    <Layout>
      <Seo
        title="Temas de Noticias en Turista Chiapas"
        description="Muestra los diferentes temas de noticias que se encuentran registrados en Turista Chiapas."
      />
      <div className="cont-area">
        {topics.map((item) => (
          <p key={item}>
            <Link to={item}>{item}</Link>
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
