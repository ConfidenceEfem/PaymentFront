import React from 'react'
import styled from "styled-components"

const VerifyPage = () => {
  return (
    <Container>
          <Title>Verify Payment With Paystack</Title>
    </Container>
  )
}

export default VerifyPage

const Title = styled.div`
text-align: center;
width: 100%;
height: 90px;
display:flex;
align-items: center;
justify-content: center;
background-color: black;
color: white;
font-weight: 500;
font-size: 20px;
`

const Container = styled.div`
width: 100%;
height: 100%;
display:flex;
background-color:wheat;
flex-direction: column;
align-items: center;
`