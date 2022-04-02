import React, {useState, useEffect} from "react";
import './shoppingcart.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const baseURL = "api/cart/find";

export default function Cart() {
  const cart = useSelector(state=>state.cart)


  //AXIOS API CALL
  const navigate = useNavigate(); 

  // const [post, setPost] = useState(null);
  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //     console.log(response.data)
  //   });
    
  // }, []);
  

  // if (!post) return null;
  // console.log(post);
  // console.log(post[0].products)

  // const products = post[0].products;

  const submitForm = async () => {
    try {
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

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-card-container">
          <h1 className="cart-title">Your Bag</h1>
          <p className="cart-description">View your items below</p>
            <div className="cart-items">
                <li className="cart-list">
                  {/* //changing products.map to allProducts.map to get cart items from redux instead of database */}
                    <ul>{cart.products.map((cart) => {
                      console.log(cart.title);
                    return (
                      <div key={cart.id}>
                      <div>Title:{cart.title}</div>
                      {/* <div>Description:{cart.description}</div> */}
                      <img className='cart-product-img' alt='cart product'src={cart.img}></img>
                      <div>Category:{cart.category}</div>
                      {/* <div>Size:{cart.size}</div> */}
                      <div>Price:{cart.price}</div>
                      <div>Location:{cart.location}</div>
                      </div>
                    
                    )})}
                    </ul>
                </li>
            </div>
            <div className='checkout-button'>
              <input onClick={submitForm} type='button' value='Checkout'></input>
            </div>
            <div className='Go-Back-button'>
              <input onClick={gobackForm} type='button' value='Go Back'></input>
            </div>
        </div>
      </div>
    </div>
  )
}

