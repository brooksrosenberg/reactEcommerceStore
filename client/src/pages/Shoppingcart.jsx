import React from "react";
import './shoppingcart.css';

const Items = [" blah "];

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="info-container">
          <h1 className="cart-title">Your Bag</h1>
          <p className="cart-description">View your items below</p>
            <div className="cart-items">
                <li className="cart-list">
                    <ul>{Items}</ul>
                </li>
            </div>
          <button className="cart-button">Finish Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart 