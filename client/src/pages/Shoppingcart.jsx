import React, {useState, useEffect} from "react";
// import './shoppingcart.css';
import './cart.css'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
const baseURL = "api/cart/find";




function Shoppingcart() {

  // const shoppingcartWrapper = {
  //   padding: "20px"
  // }
  // const shoppingcartTitle = {
  //   fontWeight: "300",
  //   textAlign: "center",
  //   color: "red"
  // }
  return (
    <div className="cart-container">
      
      <div className="cart-wrapper">
        <div className="the-title-cart"> Your Bag </div>
        <section className="cart-section-top">
          <button className="top-cart-button-keepshopp"> KEEP SHOPPING</button>
          <div className="top-section-div">
            <p className="top-section-div-p"> Shopping Bag (2) </p>
          </div>
          <div className="top-section-div">
            <p className="top-section-div-p"> Your Wishlist (0) </p>
          </div>
          <button className="top-cart-button-checkout" type="filled"> CHECKOUT </button>
        </section>

        <section className="cart-section-bottom">
          <p className="cart-product-info">
            <div className="cart-product">
              <div className="cart-product-details">
                <img className="cart-info-image" src="https://www.hoka.com/dw/image/v2/BDJD_PRD/on/demandware.static/-/Sites-HOKA-US-master/default/dwa8219b60/images/transparent/1110519-BFBG_1.jpg?sw=414&sfrm=png&q=0&bgcolor=FFFFFF"/>
              <div className="cart-details">
                <span className="card-info-product-name"> <b> Product: </b> URBANCODE SHOE</span>
                <span className="card-info-product-id"> <b>Product ID: </b> 873485938455 </span>
                <span className="card-info-product-color"> Color </span>
                <span className="card-info-product-size"> <b> Size: </b> 10 </span>
              </div>
              </div>
              <div className="cart-price-detail">
                <div className="cart-price-detail-container">
                  <span className="cart-price-minus"> &#10134; </span>
                  <span className="cart-price-item-number"> 2 </span>
                  <span className="cart-price-add"> &#10133; </span>
                </div>
                <span className="cart-price-amount"> $ 195</span>
              </div>
            </div>

            <hr className="cart-product-hr"></hr>
            <div className="cart-product">
              <div className="cart-product-details">
                <img className="cart-info-image" src="https://www.cuyana.com/dw/image/v2/BDQQ_PRD/on/demandware.static/-/Sites-master-catalog-cuyana/default/dw55c66231/pdp_white_hero_900x900_panamahat_black_hero_9142_3.jpg?sw=1600"/>
              <div className="cart-details">
                <span className="card-info-product-name"> <b> Product: </b> Bershka Hat</span>
                <span className="card-info-product-id"> <b>Product ID: </b> 857832246786 </span>
                <span className="card-info-product-color"> Color </span>
                <span className="card-info-product-size"> <b> Size: </b> Medium </span>
              </div>
              </div>
              <div className="cart-price-detail">
                <div className="cart-price-detail-container">
                  <span className="cart-price-minus"> &#10134; </span>
                  <span className="cart-price-item-number"> 1 </span>
                  <span className="cart-price-add"> &#10133; </span>
                </div>
                <span className="cart-price-amount"> $ 95</span>
              </div>
            </div>
          </p>
          <p className="cart-product-summary">
            <span className="summary-title"> ORDER SUMMARY</span>

            <div className="summary-amount-div"> 
              <span className="summary-subtotal"> Subtotal</span>
              <span className="summary-price"> $ 290</span>
            </div>

            <div className="summary-amount-div"> 
              <span className="summary-subtotal"> Estimated shipping</span>
              <span className="summary-price"> $ 50</span>
            </div>

            <div className="summary-amount-div"> 
              <span className="summary-subtotal"> Shipping Discount</span>
              <span className="summary-price"> $ 0</span>
            </div>

            <div className="summary-amount-div"> 
              <span className="summary-subtotal"> Total</span>
              <span className="summary-price"> $ 340</span> 
            </div>
            
          </p>
        </section>

      </div>
      
    </div>
  )
}

export default Shoppingcart

























// export default function Cart() {
//   const cart = useSelector(state=>state.cart)


  
//   const navigate = useNavigate(); 
//AXIOS API CALL
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

  /////////////////////////////////////
  /////////////////////////////////////

  // const submitForm = async () => {
  //   try {
  //     navigate('/pay');
  //   }
  //   catch(err) {console.log(err)}
  // }
  // const gobackForm = async () => {
  //   try {
  //     navigate('/');
  //   }
  //   catch(err) {console.log(err)}
  // }

  // return (

  // )

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

    // ----------------------

    
//     <div className="cart-container">
//       <div className="cart-wrapper">
//         <div className="cart-title">
//             <h1 >Shopping Bag</h1>
//           </div>
//         <div className="cart-card-container">
          
          
//           {/* <p className="cart-description">View your items below</p> */}
//             <div className="cart-items">
//                 <li className="cart-list">
//                   {/* //changing products.map to allProducts.map to get cart items from redux instead of database */}
//                     <ul>{cart.products.map((cart) => {
//                       console.log(cart.title);
//                     return (
// <<<<<<< HEAD

//                       <div key={cart}>

//                       <div className="cart-details-div">

//                         <div className='cart-product-img-div'>
//                           <img className='cart-product-img' alt='cart product'src={cart.img}></img>
//                         </div>

//                         <div className="cart-info-div">
//                           <div className="cart-details"> <span className="cart-details-info">{cart.title} </span> </div>
//                           <br></br>
//                           {/* <div className="cart-details"> <span> Description: </span> {cart.description}</div> */}
//                           {/* <div className="cart-details"> <span> Category: </span> {cart.category}</div> */}
//                           <div className="cart-details"> <span> Size: </span> {cart.size}</div>
//                           <br></br>
//                           <div className="cart-details"> <span> Price: $ </span> {cart.price}</div>
//                           {/* <div className="cart-details"> <span> Location: </span> {cart.location}</div> */}
//                           <br></br>
//                           <br></br>
//                         </div>
                        
//                       </div>
                      
// =======
//                       <div key={cart.id}>
//                       <div>Title:{cart.title}</div>
//                       {/* <div>Description:{cart.description}</div> */}
//                       <img className='cart-product-img' alt='cart product'src={cart.img}></img>
//                       <div>Category:{cart.category}</div>
//                       {/* <div>Size:{cart.size}</div> */}
//                       <div>Quantity:{cart.quantity}</div>
//                       <div>Price:{cart.price}</div>
//                       <div>Total: {cart.quantity * cart.price}</div>
//                       <div>Location:{cart.location}</div>
// >>>>>>> main
//                       </div>

//                     )})}
//                     </ul>
//                 </li>
//             </div>
// <<<<<<< HEAD

            
           
// =======
//             <div className="cart-total">
//               <h3>Total: ${cart.total}</h3></div>
//             <div className='checkout-button'>
//               <input onClick={submitForm} type='button' value='Checkout'></input>
//             </div>
//             <div className='Go-Back-button'>
//               <input onClick={gobackForm} type='button' value='Go Back'></input>
//             </div>
// >>>>>>> main
//         </div>
//         <div className="cart-buttons">
//               <div className='checkout-button'>
//                 <input onClick={submitForm} type='button' value='Checkout'></input>
//               </div>
//               <div className='Go-Back-button'>
//                 <input onClick={gobackForm} type='button' value='Go Back'></input>
//               </div>
//             </div>
//       </div>
//     </div>
//   )

    //---------------------------------------------------------------
    //---------------------------------------------------------------
    //-----------------------


    // <div className="cart-container">
    //   <div className="cart-wrapper">
    //     <div className="cart-title">
    //         <h1 >Shopping Bag</h1>
    //       </div>
    //     <div className="cart-card-container">
          
          
    //       {/* <p className="cart-description">View your items below</p> */}
    //         <div className="cart-items">
    //             <li className="cart-list">
    //               {/* //changing products.map to allProducts.map to get cart items from redux instead of database */}
    //                 <ul>{cart.products.map((cart) => {
    //                   console.log(cart.title);
    //                 return (
    //                   <div key={cart.id}>
    //                   <div>Title:{cart.title}</div>
    //                   {/* <div>Description:{cart.description}</div> */}
    //                   <img className='cart-product-img' alt='cart product'src={cart.img}></img>
    //                   <div>Category:{cart.category}</div>
    //                   {/* <div>Size:{cart.size}</div> */}
    //                   <div>Quantity:{cart.quantity}</div>
    //                   <div>Price:{cart.price}</div>
    //                   <div>Total: {cart.quantity * cart.price}</div>
    //                   <div>Location:{cart.location}</div>
    //                   </div>

    //                 )})}
    //                 </ul>
    //             </li>
    //         </div>
    //         <div className="cart-total">
    //           <h3>Total: ${cart.total}</h3></div>
    //         <div className='checkout-button'>
    //           <input onClick={submitForm} type='button' value='Checkout'></input>
    //         </div>
    //         <div className='Go-Back-button'>
    //           <input onClick={gobackForm} type='button' value='Go Back'></input>
    //         </div>
    //     </div>
    //     <div className="cart-buttons">
    //           <div className='checkout-button'>
    //             <input onClick={submitForm} type='button' value='Checkout'></input>
    //           </div>
    //           <div className='Go-Back-button'>
    //             <input onClick={gobackForm} type='button' value='Go Back'></input>
    //           </div>
    //         </div>
    //   </div>
    // </div>
  // )
//}

