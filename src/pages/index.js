import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const index = ({ data }) => {
  return (
    <Layout heroImg={data.image.childImageSharp}>
      <div className="cont-area" style={{ marginTop: '2rem' }}>
        <h1>Welcome to Turista Chiapas</h1>

        <p>Este es un párrafo normal</p>
      </div>
    </Layout>
  )
}

export default index

export const query = graphql`
  query {
    image: file(relativePath: { eq: "portada-chiapas-1.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
