import React from 'react'
import NoticiaCard from './noticia-card'
import styled from 'styled-components'

const NoticiasList = ({ noticias }) => {
  return (
    <div>
      {noticias.map((noticia) => (
        <NoticiaCard key={noticia.id} noticia={noticia} />
      ))}
    </div>
  )
}

export default NoticiasList
