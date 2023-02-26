import React from 'react'
import styled from 'styled-components';

//styles start here .....
const Container = styled.div`
    height: 220px;
    background-color: #D7E9F6;
    text-align: center;
    padding-top: 10px;
    
`
const Heading = styled.h1`
    font-size: 40px;
    font-weight: 600;
    line-height: 48.41px;
    color: #495375;
    
`

//styles end here .....

const SectionHeading = ({title}) => {
  return (
    <Container>
        <Heading>
            {title}
        </Heading>
        
    </Container>
  )
}

export default SectionHeading