import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import './product.css'

const Product = () => {
  return (
    <div>
        
        <article className='wrapper'>
            <div className='imageContainer'>
                <img className='image' src='https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            </div>
            <div className='infoContainer'>
                <span className='title'> The Model </span>
                <p className='description'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quas esse quaerat nemo hic blanditiis. Minus eligendi odio quaerat fugit,
                    sit deserunt voluptates amet, 
                    vero eveniet ducimus repudiandae nostrum. Doloremque, sequi?</p>
                <span className='price'> $ 200 </span>
                <div className='filterContainer'>

                    {/* Color settings */}
                    <div className='divFilter'>
                        <span className='filterTitle'>Color</span> 
                        <select> 
                            <option >black </option>
                            <option >darkblue </option>
                            <option >gray</option>
                        </select>
                         
                    </div>


                    {/* Size settings */}
                    <div>
                        <span>Size</span>
                        <select>
                            <option> XS</option>
                            <option> S</option>
                            <option> M</option>
                            <option> L</option>
                            <option> XL</option>
                            <option> 2XL</option>
                            
                        </select>
                        
                    </div>
                </div>

                {/* This is for adding it to the cart */}

                <div className='addContainer'>
                    <div className='amountContainer'>
                        <span> &#10134;</span>
                        <span className='amount'> 1</span>
                        <span> &#10133;</span>
                        <button className='button'> ADD TO CART </button>
                    </div>
                </div>
            </div>
        </article>
    </div>
    
    
  )
}

export default Product