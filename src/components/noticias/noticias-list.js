import React from 'react'
import NoticiaCard from './noticia-card'
import styled from 'styled-components'

const NoticiasList = ({ noticias }) => {
  return (
    <Wrapper>
      {noticias.map((noticia) => (
        <NoticiaCard key={noticia.id} noticia={noticia} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 1rem;
`

export default NoticiasList
