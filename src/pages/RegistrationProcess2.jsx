import React, { useEffect } from 'react'
import styled from 'styled-components';
import ProcessStatusBar from '../components/ProcessStatusBar';
import SectionHeading from '../components/SectionHeading';
import { useGlobalContext } from '../context/GlobalContext';

//styles start here...
const Container = styled.div`
    position: relative;
    background: #E5E5E5;
`
const StatusBar = styled.div`
  display: flex;
  justify-content: center;
`
const Heading = styled.div`
    
`
const InfoArea = styled.div`
width: 1200px;
    text-align: center;
    margin: auto;
`
const InfoHead = styled.div`
font-style: normal;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 30px;
  margin-top: 160px;
  color: #6B6B6B;
  margin-bottom: 50px;
`
const InfoBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
`
const Left = styled.div`
    text-align: left;
    margin-left: 20%;
`

const HospitalName = styled.h3`
    font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #6B6B6B;
`
const Location = styled.p`
    font-weight: 300;
font-size: 18px;
line-height: 22px;
color: #6B6B6B;
`
const Vaccine = styled.h3`
    font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #6B6B6B;
margin-top: 30px;
margin-bottom: 30px;
`

const Right = styled.div`
    display: flex;
    justify-content: space-around;
`
const TimeInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    
`
const Label = styled.label`
    font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #6B6B6B;
margin-bottom: 4px;

`
const Input = styled.input`
    width: 298px;
height: 50px;
border: 1px solid #464646;
border-radius: 15px;
padding: 20px;
`
const PatientDetails = styled.div`
    margin-top: 30px;
`
const Name = styled.h3`
    font-weight: 500;
font-size: 24px;
line-height: 29px;  
color: #6B6B6B;

`
const SubHead = styled.p`
    font-weight: 300;
font-size: 18px;
line-height: 22px;
color: #6B6B6B;
`
const Dob = styled.p`
    font-weight: 300;
font-size: 18px;
line-height: 22px;
color: #6B6B6B;
`
const NextButton = styled.button `
margin-top: 50px;
margin-bottom: 70px;
  width: 50%;
  height: 63px;
  background: #009FF9;
border-radius: 15px;
border: none;
font-size: 19px;
color: white;
cursor: pointer;

`


//styles end here...


const RegistrationProcess2 = () => {


    const {centerSelected} = useGlobalContext();
    console.log(centerSelected);

    useEffect(()=> {

    },[])
    

  return (
    <Container>
        <Heading>
                <SectionHeading title = {"Registration Process"} />
            </Heading>

            <StatusBar>
                <ProcessStatusBar  />
            </StatusBar>

            <InfoArea>
                <InfoHead>
                    Registration Processing
                </InfoHead>
                <InfoBody>
                    <Left>

                        {centerSelected?  (
                            <>
                            <HospitalName>{centerSelected.name}</HospitalName>
                            <Location>{centerSelected.address}</Location>
                            <Vaccine>Covishield</Vaccine>
                            <hr />
                            </>
                        ) : ''}

                        
                        
                        <PatientDetails>
                            <Name>Arjun p</Name>
                            <SubHead>Date of Birth</SubHead>
                            <Dob>09/12/1998</Dob>
                        </PatientDetails>

                    </Left>
                    <Right>
                        <TimeInfo>
                            <Label>Select vaccination booth</Label>
                            <Input placeholder='05'/>
                        </TimeInfo>
                        <TimeInfo>
                            <Label>Select time slot</Label>
                            <Input placeholder='10:30am - 11:00am' />
                        </TimeInfo>
                    </Right>
                </InfoBody>

                <NextButton>
                            Confirm Appointment
                        </NextButton>
            </InfoArea>

    </Container>
  )
}

export default RegistrationProcess2