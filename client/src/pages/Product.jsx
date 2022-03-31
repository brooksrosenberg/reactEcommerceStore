import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import './product.css'

const Product = () => {
  return (
    <div>
        <Navbar />
        <Announcement />
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
                    <div className='colorFilter'>
                        <select>
                            <option color='black'> </option>
                            <option color='darkblue'> </option>
                            <option color='gray'> </option>
                            {/* <span color='black'/>
                            <span color='darkblue'/>
                            <span color='gray'/> */}
                        </select>
                        
                    </div>

                    <div>
                        <details>Size</details>
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
            </div>
        </article>
    </div>
    
    
  )
}

export default Product