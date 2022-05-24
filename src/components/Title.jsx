import React from 'react'
import styled from 'styled-components'

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  text-transform: uppercase;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--clr-primary-5);
  }
  .title {
    color: var(--clr-black);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    font-size: 2.3rem;
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
