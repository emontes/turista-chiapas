import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import BodyBg from '../images/edomexico/body_bg.jpg'
import OuterTop from '../images/edomexico/outer_top.png'
import OuterBottom from '../images/edomexico/outer_bottom.png'

const LogoNav = (
  <StaticImage
    src="../images/edomexico/logo.png"
    alt="Turista Estado de México"
    title="Turista Estado de México"
    layout="fullWidth"
    className="logo"
  />
)
const LogoSmal2 = (
  <StaticImage
    src="../images/edomexico/logosmal2.png"
    alt="Turista Estado de México"
    title="Turista Estado de México"
  />
)

const LogoSmal = (
  <StaticImage
    src="../images/edomexico/logo_small.png"
    alt="Turista México"
    title="Turista México"
  />
)

const theme = {
  fonts: {},
  colors: {
    /* dark shades of primary color*/
    primary1: '#490c10',
    primary2: '#5c181d',
    primary5: '#550f16',
    /* lighter shades of primary color */
    primary6: '#956060',
    primary7: '#a77777',
    primary8: '#b9acac', //este debe parecer gris por que es para los <p>
    primary9: '#d6c493',
    primary10: '#fbeded',
  },
  images: {
    bodyBg: BodyBg,
    outerTop: OuterTop,
    outerBottom: OuterBottom,
    logoNav: LogoNav,
    logoSmal2: LogoSmal2,
    logoSmal: LogoSmal,
  },
}

export default theme
