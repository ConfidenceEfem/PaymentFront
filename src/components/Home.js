import React, { useState } from 'react'
import styled from "styled-components"
import axios from "axios"
import {usePaystackPayment, PaystackButton, PaystackConsumer} from "react-paystack"

const Home = () => {

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [price, setPrice] = useState(0)

   const config = {
      email,
      amount: price,
      publicKey: "pk_test_225e3b01c22f12ec2725712e67687efdcc82a54c",
      text: "Paystack Payment on React"
    }

    const initializePayment = usePaystackPayment(config)

    const creatPayment = async () => {
        const localurl = "http://localhost:2011"
        const url = "http://localhost:2011/paystack-payment"


        const onSuccess = (value) => {
            console.log(value)
  let res =    axios.get(`${localurl}/verify/${value.reference}`).then((data)=>{
            console.log("Done successfully")
            console.log(res)
          })
         
        }
        const onClose = (value) => {
            alert(`Couldn't fund wallet`)
        }

        initializePayment(onSuccess, onClose)
        // const res = await axios.post(url, {
        //     firstname: firstName,
        //     lastname: lastName,
        //     email: email,
        //     amount: price,
        // })
        // console.log(res)


    }

   

  return (
    <Container>
        <Title>Payment With Paystack</Title>
        <Form>
            <FormWrapper>
                <Inputs placeholder='Jane'
                value={firstName}
                onChange={(e)=>{
                setfirstName(e.target.value)
                }}
                />
                <Inputs placeholder='Doe'
                 value={lastName}
                 onChange={(e)=>{
                setlastName(e.target.value)
                 }}
                />
                <Inputs placeholder='janedoe@gmail.com'
                value={email}
                onChange={(e)=>{
                setEmail(e.target.value)
                }}
                />
                <Inputs placeholder='1000' type="Number"
                value={price}
                onChange={(e)=>{
                setPrice(e.target.value)
                }}
                />
                <Button
                onClick={()=>{
                    creatPayment()
                }}
                >Submit</Button>
                {/* <PaystackButton/> */}
            </FormWrapper>
        </Form>
    </Container>
  )
}

export default Home

const Button = styled.div`
width: 100%;
height:45px;
display:flex;
align-items: center;
justify-content: center;
background-color: black;
color: white;
padding: 5px;
cursor: pointer;
transition: all 550ms;
:hover{
    transform: scale(1.02);
}
`
const Inputs = styled.input`
width: 100%;
height: 45px;
padding: 5px;
font-weight: 500;
margin: 10px 0;
`

const FormWrapper = styled.div`
width: 90%;
`

const Form = styled.div`
width: 400px;
height: auto;
padding: 15px 0;
box-shadow: 1px 1px 1px 1px gray;
display:flex;
justify-content: center;
margin-top: 150px;
margin-bottom: 20px;
`

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