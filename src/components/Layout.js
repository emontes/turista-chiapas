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

const Layout = ({ children, heroImg, main, sub, seoTitle, linkExterno }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyles />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {heroImg && <Hero image={heroImg} main={main} sub={sub} />}

      <Wrapper>
        <div className="outer-top">
          <div className="outer-bottom">{children}</div>
        </div>
      </Wrapper>
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
    padding: 2rem;
  }
`
