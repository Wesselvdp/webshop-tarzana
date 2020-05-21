import React, { FC } from 'react'
import styled from 'styled-components';

// Components
import Section from './Section'

type T = any

const Mast: FC<T> = () => {
  return (
    <Section>
     <Title>Masthead</Title>
    </Section>
  )
}

const Title = styled.div`
  color: ${({ theme }) => theme.colors.primary}
`

export default Mast