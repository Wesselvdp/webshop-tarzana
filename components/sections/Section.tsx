import React, { FC } from 'react'
import styled from 'styled-components'
type T = any

const SectionComponent: FC<T> = ({children, className}) => {
  return (
    <Section className={`section ` + className}>
      {children}
    </Section>
  )
}

const Section = styled.section`
 
`

export default SectionComponent