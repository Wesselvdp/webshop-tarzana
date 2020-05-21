import React, { FC } from 'react'
import styled from 'styled-components'
type T = any

const SectionComponent: FC<T> = ({children, className}) => {
  return (
    <Section className={`section ` + className}>
      <div className="container">
        {children}
      </div>
    </Section>
  )
}

const Section = styled.section`
  .container {
    max-width: ${({theme}) => theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
  }
`

export default SectionComponent