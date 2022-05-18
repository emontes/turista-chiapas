import React from 'react'
import NoticiaCard from './noticia-card'

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
