import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ProcessStatusBar from '../components/ProcessStatusBar';
import SectionHeading from '../components/SectionHeading';
import { useGlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import moment from 'moment';
import SearchIcon from '@mui/icons-material/Search';

//styles start her ....

const Container = styled.div`
/* background-color: yellow; */
background: #E5E5E5;
position: relative;
`
const StatusBar = styled.div`
  display: flex;
  justify-content: center;
`
const Heading = styled.div`
    
`
const InfoArea = styled.div`
/* width: 1060px; */
width: 80%;
/* background-color: blue; */
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
padding: 10px;
`
const Option = styled.option`
    
`
const SearchBox = styled.div`
    width: 298px;
height: 50px;
border: 1px solid #464646;
border-radius: 15px;
padding: 10px;
background: white;
display: flex;
align-items: center;
justify-content: space-between;
`
const PinNUmber = styled.input`
    width: 100%;
    height: 100%;
    border: none;
`
const ButtonSection = styled.div`
    width: 1060px;
    /* background-color: #e66103; */
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
cursor: pointer;
`
const DisplayArea = styled.div`
    margin-top: 50px;
`
const Table = styled.table`
    width: 100%;
    
`
const TableTitle = styled.thead`
    display: grid;
    grid-template-columns: 1fr 4fr 2fr  2fr  3fr ;
    background: #DCDCDC;
    border-radius: 15px;
    height: 50px;
    align-items: center;
    
`
const TableRows = styled.tr`
    display: grid;
    grid-template-columns: 1fr 4fr 2fr  2fr  3fr ;
    height: 50px;
    align-items: center;
    color: ${(props) => props.color};
    background: white;
    border-radius: 24px;
    
`
const TableHead = styled.th`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #6B6B6B;
`
const TableDatas = styled.tbody`
margin-top: 20px;
background: white;
border-radius: 24px;
box-shadow: -6px 8px 17px 1px rgba(0, 0, 0, 0.11);


`
const TableData = styled.td`
    background-color: white;
`
const NextButton = styled.button`
margin-top: 40px;
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




// styles end here


const RegistrationProcess1 = () => {

    


    const { setHospitalSelected,hospitalSelected,centerSelected,setCenterSelected} = useGlobalContext();

    const [states, setStates] = useState([]);
    const [pinNumber, setPinNumber] = useState('')
    const [districts, setDistricts] = useState([]);
    const [stateId, setStateId] = useState('');
    const [districtId, setDistrictId] = useState('');
    const [centers, setCenters] = useState([]);


    const handleHopitalDetails = () => {

        if(centerSelected === ''){
            alert('Please select a hospital')
        }else{
            setHospitalSelected(true)
        }
        

        // if(centerSelected.length === 0){
        //     setHospitalSelected(true)
        // }else{
        //     alert('Please selecte a center');
        // }
    }

    const fetchStates = async () => {
        const { data } = await axios.get('https://cdndemo-api.co-vin.in/api/v2/admin/location/states');
        console.log(data);
        setStates(data.states)
    }


    useEffect(() => {
        fetchStates()
    }, [])

    const handleState = (e) => {
        const stateId = e.target.value;
        setStateId(stateId);
    }

    const fetchDistricts = async () => {
        const { data } = await axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`);
        console.log(data);
        setDistricts(data.districts)
    }

    useEffect(() => {
        fetchDistricts()
    }, [stateId])

    const handleDistrict = (e) => {
        const districtId = e.target.value;
        setDistrictId(districtId)
    }

    const date = moment().format('DD-MM-YYYY');

    const fetchHospitals = async () => {
        const { data } = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${date}`);
        setCenters(data.centers)
        console.log(data.center);
    }
    useEffect(() => {
        fetchHospitals()
    }, [districtId])

    const handleSelectCenter = (center) => {
        console.log(center);
        setCenterSelected(center)
    }

    const handlePinNumber = (e) => {
        setPinNumber(e.target.value)
    }
    const handlePin = async() => {
        const {data} = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pinNumber}&date=${date}`)
        setCenters(data.sessions)
        console.log(data.sessions);  
    }


    return (
        <Container>

            <Heading>
                <SectionHeading title={"Registration Process"} />
            </Heading>

            <StatusBar>
                <ProcessStatusBar />
            </StatusBar>


            <InfoArea>

                <InfoHead>
                    Choose Vaccine Center
                </InfoHead>

                <SearchField>
                    <SingleField  >
                        <Label>State</Label>
                        <Input name='state' onChange={(e) => handleState(e)} >
                            <Option value='' >Select State</Option>
                            {states?.map((state) => (
                                <Option key={state.state_id} value={state.state_id} >{state.state_name}</Option>
                            ))}

                        </Input>
                    </SingleField>

                    <SingleField>
                        <Label>District</Label>
                        <Input name='district' onChange={(e) => { handleDistrict(e) }} >
                            <Option value={''} >Select District</Option>
                            {districts?.map((district) => (
                                <Option key={district.district_id} value={district.district_id} >{district.district_name}</Option>
                            ))}
                        </Input>
                    </SingleField>

                    <SingleField>
                        <Label>Pincode</Label>
                        <SearchBox>
                            <PinNUmber value={pinNumber} type='text' placeholder='Enter your pin' onChange={handlePinNumber} />
                            <SearchIcon style={{cursor:'pointer'}} onClick= {()=>handlePin()} />
                        </SearchBox>
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
                    <Table>
                        <TableTitle>
                            <TableHead>No</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Covaxin</TableHead>
                            <TableHead>Covishield</TableHead>
                            <TableHead>Action</TableHead>
                        </TableTitle>

                        {centers?.length !== 0 ? (
                             <TableDatas>   
                             {centers?.map((center,index) => (
 
                                 <TableRows key={center?.center_id} color = {centerSelected?.center_id === center?.center_id  ? '#009FF9' : '#6B6B6B'} >
                                     <TableData>{index+1}</TableData>
                                     <TableData>{center?.name}</TableData>
                                     <TableData>{center?.sessions[0]?.available_capacity || 0}</TableData>
                                     <TableData>{center?.sessions[0]?.available_capacity || 0}</TableData>
                                     <TableData style={{cursor:'pointer'}} onClick={()=>handleSelectCenter(center)} >{centerSelected?.center_id === center.center_id  ? 'Selected' : 'Select'}</TableData>
                                 </TableRows>
 
                             ))}
                         </TableDatas>
                         
                        ) : (

                            <tr style={{color:'red', marginTop:'5px'}} >NO Center available</tr>
                        )}
                       
                    </Table>


                    
                    <NextButton onClick={() => handleHopitalDetails()} >
                        Next
                    </NextButton>

                </DisplayArea>



            </InfoArea>

        </Container>
    )
}

export default RegistrationProcess1