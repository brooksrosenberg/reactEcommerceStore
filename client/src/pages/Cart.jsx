import React, {useState, useEffect} from "react";
// import './shoppingcart.css';
import './cart.css'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
const baseURL = "api/cart/find";




function Shoppingcart() {

  const shoppingcartWrapper = {
    padding: "20px"
  }
  const shoppingcartTitle = {
    fontWeight: "300",
    textAlign: "center",
    color: "blue"
  }
  return (
    <div className="cart-container">
      
      <div style={shoppingcartWrapper}>
        <span style={shoppingcartTitle}> Your Bag </span>
        <section className="cart-section-top"></section>
        <section className="cart-section-bottom"></section>

      </div>
      
    </div>
  )
}

export default Shoppingcart