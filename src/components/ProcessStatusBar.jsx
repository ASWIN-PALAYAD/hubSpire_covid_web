import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context/GlobalContext';
import DoneIcon from '@mui/icons-material/Done';

// styles starts here.....
const Container = styled.div`
position: absolute;
    /* width: 1060px; */
    width: 80%;
    height: 220px;
    background-color: white;
    border-radius: 33px;
    box-shadow: -6px 8px 17px 1px rgba(0, 0, 0, 0.11);
    /* left: 270px; */
    top: 110px;
    display: flex;
    justify-content: space-around;
`
const Process = styled.div`
    display: flex;
    align-items: center;

    
`
const Circle = styled.div`
    height: 51px;
    width: 51px;
    border-radius: 50%;
    border: 1px solid #6B6B6B;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const ProName = styled.div`
    font-size: 18px;
    font-weight: 500;
    color:  #009FF9;
`



// styles end here .....


const ProcessStatusBar = () => {

    const {idVerified,hospitalSelected} = useGlobalContext()

    return (
        <Container>
            <Process>
                <Circle style={{backgroundColor:' #009FF9'}} >
                  <DoneIcon style={{color:'white'}}/>
                </Circle>
                <ProName>Identification</ProName>
            </Process>

            <Process>
                <Circle style={{backgroundColor : idVerified ? ' #009FF9' : ' ' }} >
                <DoneIcon style={{color:'white'}}/>
                </Circle>
                <ProName>Vaccine Center</ProName>
            </Process>

            <Process>
                <Circle style={{backgroundColor : hospitalSelected ? ' #009FF9' : ' ' }} >
                <DoneIcon style={{color:'white'}}/>
                </Circle>
                <ProName>Appointment</ProName>
            </Process>
        </Container>
    )
}

export default ProcessStatusBar