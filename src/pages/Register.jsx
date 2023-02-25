import React from 'react'
import styled from 'styled-components';
import ProcessStatusBar from '../components/ProcessStatusBar';
import SectionHeading from '../components/SectionHeading';


//styles starts here ....
const Container = styled.div`
  position: relative;
  background-color: red;
  padding-bottom: 50px;
  justify-content: center;
`
const Heading = styled.div`
  
`
const StatusBar = styled.div`
  display: flex;
  justify-content: center;
`
const InfoArea = styled.div`
    text-align: center;

`
const InfoHead = styled.h1`
  font-style: normal;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 30px;
  margin-top: 130px;
  color: #6B6B6B;
  margin-bottom: 50px;
`
const ButtonArea = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  grid-gap: 50px;
  align-items: center;
`

const Button = styled.button`
  width: 327px;
  height: 137px;
  border: none;
  background: white;
  box-shadow: -6px 8px 17px 1px rgba(106, 105, 105, 0.11);
  border-radius: 24px;
  cursor: pointer;  
  font-size: 24px;
  font-weight: 600;
  color: #6B6B6B;

  &:hover{
    border: 1px solid #009FF9;  
    text-decoration: underline  #009FF9 ;

  }
`

const FormArea = styled.div`
width: 624px;
display: flex;
flex-direction: column;
text-align: left;
margin: auto;
margin-top: 60px;
  
`
const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
margin-bottom: 20px;
`
const Input = styled.input`
width: 100%;
height: 50px;
border-radius: 15px;
border: 1px solid #464646;
padding: 20px;
margin-bottom: 30px;
  
`
const NextButton = styled.button `
  width: 100%;
  height: 63px;
  background: #009FF9;
border-radius: 15px;
border: none;
font-size: 19px;
color: white;
cursor: pointer;

`




// styles end here.....



const Register = () => {
  return (
    <Container>

      <Heading>
        <SectionHeading/>
      </Heading>

      <StatusBar>
        <ProcessStatusBar/>
      </StatusBar>

      <InfoArea>

        <InfoHead>
          Select Identification type
        </InfoHead>

        <ButtonArea>
            <Button>Adhar Id</Button>
            <Button>Student Id</Button>
            <Button>Passport</Button>
            <Button>Birth Certificate</Button>
        </ButtonArea>

        <FormArea>
          <Label>Enter your Adhar no</Label> 
          <Input type='text' placeholder='Enter the identity card number' />
          <NextButton>Next</NextButton>
        </FormArea>


      </InfoArea>
      
    </Container>
  )
}

export default Register