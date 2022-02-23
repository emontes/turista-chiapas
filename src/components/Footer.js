import React from 'react'
import styled from 'styled-components'
import LinksFooter2 from '../constants/links_footer2'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import socialLinks from '../constants/social_links'
import destacadosChiapas from '../constants/footer_des_chiapas'
import otrosDestinos from '../constants/footer_otros_destinos'
import { BiChevronRightCircle } from 'react-icons/bi'

const Footer = ({ title = 'El Turista Chiapas' }) => {
  return (
    <Wrapper>
      <div className="footer-1">
        <div className="foot">
          <ul className="social-links">
            {socialLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url} className="social-link">
                    {link.icon}
                  </a>
                </li>
              )
            })}
          </ul>
          <StaticImage
            src="../assets/images/logosmal2.png"
            alt="Turista Chiapas"
          />

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
        {LinksFooter2.map((link, i) => {
          const rowLen = LinksFooter2.length
          return (
            <>
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
              {rowLen === i + 1 ? '' : ' | '}
            </>
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
    color: var(--clr-grey-4);

    text-transform: capitalize;
  }
  a {
    color: var(--clr-grey-5);
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

    a {
      color: var(--clr-primary-5);
    }
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
  }
`
