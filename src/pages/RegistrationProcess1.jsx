import React from 'react'
import styled from 'styled-components';
import ProcessStatusBar from '../components/ProcessStatusBar';
import SectionHeading from '../components/SectionHeading';

//styles start her ....

const Container = styled.div`
height: 100vh;
background-color: yellow;
position: relative;
`
const StatusBar = styled.div`
  display: flex;
  justify-content: center;
`
const Heading = styled.div`
    
`
const InfoArea = styled.div`
width: 1060px;
background-color: blue;
    text-align: center;
    margin: auto;
`
const InfoHead = styled.div`
font-style: normal;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 30px;
  margin-top: 130px;
  color: #6B6B6B;
  margin-bottom: 50px;
`
const SearchField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const SingleField = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`
const Label = styled.label`
    font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;


color: #009FF9;

`
const Input = styled.select`
    width: 298px;
height: 50px;
border: 1px solid #464646;
border-radius: 15px;
`
const Option = styled.option`
    
`
const ButtonSection = styled.div`
    width: 1060px;
    background-color: #e66103;
    text-align: center;
    margin: auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
`
const Button = styled.button`
    width: 188px;
    height: 107px;
    background: #FFFFFF;
border: 1px solid #009FF9;
box-shadow: -6px 8px 17px 1px rgba(106, 105, 105, 0.11);
border-radius: 24px;
`
const DisplayArea = styled.div`
    
`




// styles end here


const RegistrationProcess1 = () => {
    return (
        <Container>

            <Heading>
                <SectionHeading />
            </Heading>

            <StatusBar>
                <ProcessStatusBar/>
            </StatusBar>


            <InfoArea>

                <InfoHead>
                    Choose Vaccine Center
                </InfoHead>

                <SearchField>
                    <SingleField>
                        <Label>State</Label>
                        <Input>
                            <Option>kerala</Option>
                            <Option>Tamilnadu</Option>
                        </Input>
                    </SingleField>

                    <SingleField>
                        <Label>State</Label>
                        <Input>
                            <Option>kerala</Option>
                            <Option>Tamilnadu</Option>
                        </Input>
                    </SingleField>

                    <SingleField>
                        <Label>State</Label>
                        <Input>
                            <Option>kerala</Option>
                            <Option>Tamilnadu</Option>
                        </Input>
                    </SingleField>

                </SearchField>

                <ButtonSection>
                    <Button>18+</Button>
                    <Button>45+</Button>
                    <Button>Free</Button>
                    <Button>Paid</Button>
                    <Button>First Dose</Button>
                </ButtonSection>

                <DisplayArea>

                </DisplayArea>


            </InfoArea>

        </Container>
    )
}

export default RegistrationProcess1