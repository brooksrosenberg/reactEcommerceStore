import React, {useState, useEffect} from "react";
import './cart.css'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
const baseURL = "api/cart/find";




function Shoppingcart() {

  const cart = useSelector(state=>state.cart)
  const navigate = useNavigate();

  const token = localStorage.getItem('token')
  const username = localStorage.getItem('username')

  const submitForm = async () => {
    if (!token) return alert ('You are not logged in, to continue checkout please sign in.')
    else try {
      navigate('/pay');
    }
    catch(err) {console.log(err)}
  }
  const gobackForm = async () => {
    try {
      navigate('/');
    }
    catch(err) {console.log(err)}
  }
  const clearStorage = () => {
    window.location.reload(false)
  }

  return (
    <div className="cart-container">
      
      <div className="cart-wrapper">
        <div className="the-title-cart"> {username}'s Bag </div>
        <section className="cart-section-top">
          <div className="top-section-div">
            <p className="top-section-div-p"> Your Wishlist (0) </p>
          </div>
        </section>

        <section className="cart-section-bottom">
          <p className="cart-product-info">

            <div className="cart-product">

                <ul>{cart.products.map((cart) => {
                          console.log(cart.title);
                        return (
                          <div key={cart.id}>

                            <div className="cart-product-details">
                            <img className="cart-info-image" src={cart.img} alt= {cart.title}/>
                            <div className="cart-details">
                              <span className="card-info-product-name"> <b> Product: </b> {cart.title} </span>
                              <span className="card-info-product-id"> <b>Category: </b> {cart.category} </span>
                              <span className="cart-info-product-id"><b>Price: </b> ${cart.price}</span>
                              <span className="cart-price-item-number"> <b> Qty:</b>  {cart.quantity} </span> 
                              <span className="cart-price-item-number"> Subtotal: ${cart.quantity * cart.price} </span> 
                            </div>
                            </div>
                            


                        </div>
                        
                      )})}
                </ul>
            </div>

            <hr className="cart-product-hr"></hr>
            

          </p>
          <p className="cart-product-summary">
            <span className="summary-title"> ORDER SUMMARY</span>

            <div className="summary-amount-div"> 
              <span className="summary-subtotal"> Shipping Discount</span>
              <span className="summary-price"> FREE </span>
            </div>

            <div className="summary-amount-div"> 
              <span className="summary-subtotal-total"> Total</span>
              <span className="summary-price-total"> $ {cart.total} </span> 
            </div>

            <div className='checkout-button'>
              <input className="cart-button" onClick={submitForm} type='button' value='Checkout'></input>
           </div>
           <div className='checkout-button'>
              <input className="cart-button" onClick={clearStorage} type='button' value='Clear Cart'></input>
           </div>
            
           <div className='Go-Back-button'>
              <input className="cart-button" onClick={gobackForm} type='button' value='Go Back'></input>
            </div>
            
          </p>
        </section>

      </div>
      
    </div>
  )
}

export default Shoppingcart



