import React, { useState } from 'react'
import GlobalStyles from '../assets/themes/globalStyles'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import BodyBg from '../assets/images/body_bg.jpg'
import OuterTop from '../assets/images/outer_top.png'
import OuterBottom from '../assets/images/outer_bottom.png'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import device from '../assets/themes/device'

const Layout = ({
  children,
  topComponent, //optional component for substitute top banner
  heroImg,
  heroComponent, //optional component inside hero Image
  main, //main Title in hero Image
  sub, //Subtitle in hero Image
  seoTitle, //title for The h1 in footer
  linkExterno, // is Added to the external sites
  sinFondo, //define no background and no padding for the children
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyles />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {heroImg && (
        <Hero image={heroImg} component={heroComponent} main={main} sub={sub} />
      )}
      {topComponent && topComponent}

      {sinFondo ? (
        <Wrapper>
          <div>{children}</div>
        </Wrapper>
      ) : (
        <Wrapper>
          <div className="outer-top">
            <div className="outer-bottom">{children}</div>
          </div>
        </Wrapper>
      )}

      <Footer
        title={seoTitle ? seoTitle : 'Turista Chiapas'}
        linkExterno={linkExterno}
      />
    </>
  )
}

export default Layout

const Wrapper = styled.main`
  background: url(${BodyBg}) var(--clr-primary-10);

  .outer-top {
    background: url(${OuterTop}) no-repeat left top;
    width: 100%;
  }

  element.style {
  }
  .outer-bottom {
    background: url(${OuterBottom}) no-repeat right bottom;
    width: 100%;
    padding: 0rem;
    @media ${device.tablet} {
      padding: 1rem;

      @media ${device.laptop} {
        padding: 2rem;
      }
    }
  }
`
