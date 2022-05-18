import React from 'react'
import styled from 'styled-components'
import About from './About'

const index = () => {
  return (
    <Wrapper>
      <About title="Noticias" description="Noticias de Turismo en Chiapas" />
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: grid;
  grid-template-columns: 90%;
  justify-content: center;
  row-gap: 1rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  padding: 1rem 0;

  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 300px);
      column-gap: 3rem;
    }
  }
`
export default index
