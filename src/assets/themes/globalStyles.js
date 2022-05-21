import { createGlobalStyle } from 'styled-components'
import device from './device'

const GlobalStyle = createGlobalStyle`
/*
=============== 
Fonts
===============
*/

/* Esto causa un error en producción */
${
  '' /* @import url("http://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic"); */
}

/*
=============== 
Variables
===============
*/
:root {
  /* dark shades of primary color*/
  --clr-primary-1: #294029;
  --clr-primary-2: #477246;
  --clr-primary-5: hsl(118, 25%, 43%);
  /* lighter shades of primary color */
  --clr-primary-6: #ededda;
  --clr-primary-7: #c0df6c;
  --clr-primary-8: #f1f7ea;
  --clr-primary-9: #b4d0a9;
  --clr-primary-10: #d2edde;
 /* darkest grey - used for headings */
  --clr-grey-1: #12222a;
  --clr-grey-3: #15262f;
  --clr-grey-4: hsl(117, 9%, 46%);
  /* grey used for paragraphs */
  --clr-grey-5: #999;
  --clr-grey-8: #b1b8b8;;
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-green-dark: hsl(125, 67%, 35%);
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-black: #222;
  --clr-white: #fff;
  --clr-white-transparency-8: rgba(255, 255, 255, 0.8);
  --ff-primary: "Lato", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.2rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 117rem;
  --fixed-width: 70rem;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
    /* This defines what 1rem is */
  font-size: 62.5%; /* 1 rem = 10px; 10px/16px = 62.5% */

  @media ${device.mobileL} {
      font-size: 75%; /* 1 rem = 12px 12/16 = .75 */
  }
  @media ${device.tablet} {
    font-size: 81.25%; /* 1 rem = 13px 13/16 = .8125 */
  }
  @media ${device.laptop} {
      font-size: 87.5%; /* 1 rem = 14px 14/16 = .875% */
  }
  @media ${device.desktop} {
      font-size: 93.75%; /* 1 rem = 15px 15/16 = .9375% */
  }
  @media ${device.desktopL} {
      font-size: 100%; /* 1 rem = 16px 16/16 = 1% */
  }

  
}
body {
  font-family: var(--ff-primary);
  
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 1.2rem;
  margin-top: 5.8rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: var(--clr-primary-5);
  :hover {
    color: var(--clr-primary-6);
  }
}
p {
  margin-bottom: 1.4rem;
  color: var(--clr-grey-5);
}

/* section */
.section {
  
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 4rem;
}

.section-center {
  @media screen and (min-width: 1170px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 1rem;
  }
}

.section-title {
  font-weight: 700;
  text-transform: capitalize;
  color: #e12d39;
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
}

.cont-area {
    background: var(--clr-primary-8);
    border: 1px solid #d3d3d3;
    border-radius: 8px;
    box-shadow: 0px 0px 1px #d3d3d3;
    position: relative;
    padding: 1rem;
}

.category-menu {
    font-size: 1.5rem;
    color: var(--clr-grey-5);
    line-height: 2rem;
    display: block;
    
    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .category-menu:hover {
    background: var(--clr-primary-9);
  }

/* social links */

.footer-icons {
  font-size: 2.4rem;
  display: flex;
  justify-content: space-between;
}

.nav-icons {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
  }

.social-icon {
    
    transition: var(--transition);
    margin-left: 0.5rem;
  }

/*===============
Banner Component
===============
*/
.banner-icons {
  display: flex;
  justify-content: center;
}
.banner-icons a {
  font-size: 1.5rem;
  margin: 0 0.25rem;
}
.banner-icons li {
  transition: var(--transition);
}
.banner-icons li:hover {
  transform: translateY(-10%);
}


.social-icon:hover {
    color: var(--clr-primary-5);
    transform: translateY(-5px);
  }
.facebook-icon {
  color: #3b5998;
}
.twitter-icon {
  color: #00acee;
}
.dribble-icon {
  color: #ea4c89;
}
/*
=============== 
Sidebar
===============
*/
.sidebar {
  background: var(--clr-grey-10);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);
}
.show-sidebar {
  opacity: 1;
  transform: translateX(0);
}

.sidebar-links li a {
  display: block;
  text-align: center;
  text-transform: capitalize;
  color: var(--clr-grey-5);
  letter-spacing: var(--spacing);
  margin-bottom: 0.5rem;
  font-size: 2rem;
  transition: var(--transition);
  border-radius: var(--radius);
}
.sidebar-links li a:hover {
  background: var(--clr-primary-9);
  color: var(--clr-primary-5);
}
.close-btn {
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 4rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-dark);
  cursor: pointer;
}
@media screen and (min-width: 992px) {
  .sidebar {
    transform: translateX(-100%);
  }
}
`

export default GlobalStyle
