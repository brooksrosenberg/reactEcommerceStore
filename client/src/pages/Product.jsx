import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'


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
                <span className='price'> $ 2000 </span>
                <div className='filterContainer'>
                    <div>
                        <details>Color</details>
                        <span color='black'/>
                        <span color='darkblue'/>
                        <span color='gray'/>
                    </div>

                    <div>
                        <details>Size</details>
                        <div>
                            <span> XS</span>
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </article>
    </div>
    
    
  )
}

export default Product