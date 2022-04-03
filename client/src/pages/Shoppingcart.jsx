import React, {useState, useEffect} from "react";
import './shoppingcart.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const baseURL = "api/cart/find";

export default function Cart() {
  const navigate = useNavigate(); 

  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
    
  }, []);
  

  if (!post) return null;
  console.log(post);
  console.log(post[0].products)

  const products = post[0].products;

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

    // ORIGINAL DESIGN
    
    // <div className="cart-container">
    //   <div className="cart-wrapper">
    //     <div className="cart-card-container">
    //       <h1 className="cart-title">Shopping Bag</h1>
    //       {/* <p className="cart-description">View your items below</p> */}
    //         <div className="cart-items">
    //             <li className="cart-list">
    //                 <ul>{products.map((cart) => {
    //                   console.log(cart.title);
    //                 return (
    //                   <div key={cart}>
    //                     <img className='cart-product-img' alt='cart product'src={cart.img}></img>
    //                   <div> <span className="cart-details"> Title: </span> {cart.title}</div>
    //                   <div> <span className="cart-details"> Description: </span> {cart.description}</div>
    //                   <div> <span className="cart-details"> Category: </span> {cart.category}</div>
    //                   <div> <span className="cart-details"> Size: </span> {cart.size}</div>
    //                   <div> <span className="cart-details"> Price: $</span> {cart.price}</div>
    //                   <div> <span className="cart-details"> Location: </span> {cart.location}</div>
    //                   <br></br>
    //                   <br></br>
    //                   </div>
    //                 )})}
    //                 </ul>
    //             </li>
    //         </div>

    //         <div className="cart-buttons">
    //           <div className='checkout-button'>
    //             <input onClick={submitForm} type='button' value='Checkout'></input>
    //           </div>
    //           <div className='Go-Back-button'>
    //             <input onClick={gobackForm} type='button' value='Go Back'></input>
    //           </div>
    //         </div>
           
    //     </div>
    //   </div>
    // </div>


    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-title">
            <h1 >Shopping Bag</h1>
          </div>
        <div className="cart-card-container">
          
          
          {/* <p className="cart-description">View your items below</p> */}
            <div className="cart-items">
                <li className="cart-list">
                    <ul>{products.map((cart) => {
                      console.log(cart.title);
                    return (

                      <div key={cart}>

                      <div className="cart-details-div">

                        <div className='cart-product-img-div'>
                          <img className='cart-product-img' alt='cart product'src={cart.img}></img>
                        </div>

                        <div className="cart-info-div">
                          <div className="cart-details"> <span className="cart-details-info">{cart.title} </span> </div>
                          <br></br>
                          {/* <div className="cart-details"> <span> Description: </span> {cart.description}</div> */}
                          {/* <div className="cart-details"> <span> Category: </span> {cart.category}</div> */}
                          <div className="cart-details"> <span> Size: </span> {cart.size}</div>
                          <br></br>
                          <div className="cart-details"> <span> Price: $ </span> {cart.price}</div>
                          {/* <div className="cart-details"> <span> Location: </span> {cart.location}</div> */}
                          <br></br>
                          <br></br>
                        </div>
                        
                      </div>
                      
                      </div>

                    )})}
                    </ul>
                </li>
            </div>

            
           
        </div>
        <div className="cart-buttons">
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

