import React from 'react'
import styled from 'styled-components'
import LinksFooter2 from '../constants/links_footer2'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import SocialLinks from '../constants/social_links'
import destacadosChiapas from '../constants/footer_des_chiapas'
import otrosDestinos from '../constants/footer_otros_destinos'
import { BiChevronRightCircle } from 'react-icons/bi'

const Footer = ({ title = 'El Turista Chiapas' }) => {
  return (
    <Wrapper>
      <div className="footer-1">
        <div className="foot">
          <SocialLinks styleClass="footer-icons" />
          <a href="https://turista.com.mx">
            <StaticImage
              src="../assets/images/logosmal2.png"
              alt="Turista Chiapas"
              title="Turista Chiapas"
            />
          </a>

          <div className="privacy">
            &copy; {new Date().getFullYear()} {' | '}
            <Link to="/privacidad"> Aviso de Privacidad</Link>
            <br />
            Derechos Reservados
          </div>
        </div>

        <div className="enlaces">
          <div className="foot">
            <h4>Destacados en Chiapas</h4>
            <ul className="ftr-list">
              {destacadosChiapas.map((link) => {
                return (
                  <li key={link.id}>
                    <Link to={link.url}>
                      <BiChevronRightCircle /> {link.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="foot">
            <h4>Otros Destinos</h4>
            <ul className="ftr-list">
              {otrosDestinos.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url}>
                      <BiChevronRightCircle /> {link.text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="foot">
          <StaticImage
            src="../assets/images/logo_small.png"
            alt="Turista Chiapas"
          />
        </div>
      </div>

      <h1>{title}</h1>

      <div className="footer-2">
        <Link to="/">Home</Link> | <Link to="/hoteles">Hoteles</Link> |&nbsp;
        {LinksFooter2.map((link, i) => {
          const rowLen = LinksFooter2.length
          return (
            <span key={link.id}>
              <a key={link.id} href={link.url}>
                {link.text}
              </a>
              {rowLen === i + 1 ? '' : ' | '}
            </span>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  color: var(--clr-primary-1);
  background-color: var(--clr-primary-9);

  h1 {
    margin-bottom: 2rem;
    text-align: center;
    text-transform: capitalize;
  }
  h4 {
    color: var(--clr-primary-2);

    text-transform: capitalize;
  }

  /* social links */
  .social-links {
    margin-top: 0rem;
    width: 100%;
    justify-content: flex-start;
    gap: 1rem;
  }
  .social-link {
    font-size: 2.8rem;
    color: var(--clr-primary-2);
    transition: var(--transition);
  }
  .social-link:hover {
    color: var(--clr-white);
  }
  .privacy {
    font-size: 1rem;
  }
  .footer-1 {
    padding: 6rem 3rem 3rem;
    display: flex;

    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
  }

  .enlaces {
    display: flex;
    gap: 3rem;
  }

  .ftr-list {
    font-size: 1rem;

    margin: 1rem auto 0;

    li {
      text-align: left;
    }
  }

  .footer-2 {
    width: 100%;
    background: var(--clr-primary-1);
    padding: 2.5rem 0;
    text-align: center;
    color: var(--clr-grey-5);
    a {
      color: var(--clr-grey-5);
      text-transform: capitalize;
      :hover {
        color: var(--clr-primary-7);
      }
    }
  }
`
