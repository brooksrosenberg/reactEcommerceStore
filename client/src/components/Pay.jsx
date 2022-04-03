import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import './pay.css'
import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'


const KEY = 'pk_test_51Kj9WsHSZblxpMo71ICY5jiZ9YeadGVW4XfJP7SMSuTqJp0sTkICSvcinn71f7k5hRvB80r50zw99vfdx0DhJX3200QnCbwCzX' 

const Pay = () => {
    const cart = useSelector(state=>state.cart)
    
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()

    const onToken = (token) =>{
        setStripeToken(token);
    };

    useEffect(()=>{
        const makeRequest = async () => {
            try{
                const res = await axios.post('/api/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: cart.total*100,
                })
                console.log(res.data)
                navigate("/success");
            } catch (err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken, navigate])

  return (
    <div className='pay-container'>
        <StripeCheckout 
            name="Craft"
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={(cart.total) * 100}
            token={onToken}
            stripeKey={KEY}
            >
            <button className='pay-button'>Pay Now!</button>
        </StripeCheckout>
    </div>
  )
}

export default Pay