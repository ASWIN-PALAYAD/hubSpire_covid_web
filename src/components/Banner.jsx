import React from 'react'
import NavBar from './NavBar'
import styled from 'styled-components';
import bannerImage from '../assets/images/49992933-01 1.png'

// styles starts here ....

const Container = styled.div`
    height: 589px;
    background-color: #009FF9;
`
const BannerItems = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-content: center;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 200px;
`
const Heading = styled.h1`
font-size: 40px;
font-weight: 600;
line-height: 37.4px;
color: white;  
`
const SubTitle = styled.p`
    font-size: 24px;
    font-weight: 300;
    line-height: 31.05px;
    color: white;
`

const Right = styled.div`
    
`
const BannerImage = styled.div`
    
`
const Image = styled.img`
    width: 413px;
    height: 413px;
    margin-top: 100px;
    
`


// styles end here......


const Banner = () => {
  return (
    <Container>
        <NavBar/>
        <BannerItems>
            <Left>
                <Heading>Welcome to Covid web</Heading>
                <SubTitle>We’re all responsible.....Let’s defeat COVID 19</SubTitle>

            </Left>

            <Right>
                <BannerImage>
                    <Image src={bannerImage} />
                </BannerImage>

            </Right>

        </BannerItems>

    </Container>
  )
}

export default Banner