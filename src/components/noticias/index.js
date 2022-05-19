import React from 'react'
import NoticiaCard from './noticia-card'
import Banner from '../Banner/indexNoticias'

const Noticias = ({ noticias, isHome, title = 'Noticias' }) => {
  return (
    <section
      className="section cont-area"
      style={{ background: 'var(--clr-white' }}
    >
      <div className="section-center">
        <div>
          {noticias.map((noticia) => (
            <NoticiaCard key={noticia.id} noticia={noticia} />
          ))}
        </div>
        <div>
          <Banner title={title} isHome={isHome} />
        </div>
      </div>
    </section>
  )
}

export default Noticias
