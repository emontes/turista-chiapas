import React from 'react'
import links from '../constants/links'
import socialLinks from '../constants/social_links'
import { Link } from 'gatsby'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? 'sidebar-links' : null}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen ? 'social-links sidebar-icons' : null}>
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
      </div>
    </aside>
  )
}

export default Sidebar

const Wrapper = styled.aside`
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
`
