import React from 'react'
import styled from 'styled-components';
import ProcessStatusBar from '../components/ProcessStatusBar';
import SectionHeading from '../components/SectionHeading';
import { useGlobalContext } from '../context/GlobalContext';

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
width: 1060px;
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
`
const Option = styled.option`
    
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
const TableRow = styled.thead`
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
    background: #DCDCDC;
    border-radius: 15px;
    height: 50px;
    align-items: center;
    
`
const TableHead = styled.th`
    font-weight: 500;
font-size: 18px;
line-height: 22px;


color: #6B6B6B;
`
const TableDatas = styled.tbody`
    
`
const TableData = styled.td`
    
`
const NextButton = styled.button `
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

    const {setHospitalSelected} =  useGlobalContext();

    const handleHopitalDetails = () => {
        setHospitalSelected(true)
    }



    return (
        <Container>

            <Heading>
                <SectionHeading title={"Registration Process"} />
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
                        <Label>District</Label>
                        <Input>
                            <Option>kerala</Option>
                            <Option>Tamilnadu</Option>
                        </Input>
                    </SingleField>

                    <SingleField>
                        <Label>Pincode</Label>
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
                    <Table>
                        <TableRow>
                            <TableHead>No</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Covaxin</TableHead>
                            <TableHead>Covishield</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                        <TableDatas>
                            <TableRows>
                                <TableData>1</TableData>
                                <TableData>vadakara</TableData>
                                <TableData>13</TableData>
                                <TableData>16</TableData>
                                <TableData>selected</TableData>
                            </TableRows>
                            <TableRow>
                                <TableData>1</TableData>
                                <TableData>vadakara</TableData>
                                <TableData>13</TableData>
                                <TableData>16</TableData>
                                <TableData>selected</TableData>
                            </TableRow>


                        </TableDatas>

                        

                    </Table>
                    <NextButton onClick={()=> handleHopitalDetails()} >
                            Next
                    </NextButton>

                </DisplayArea>

                

            </InfoArea>

        </Container>
    )
}

export default RegistrationProcess1