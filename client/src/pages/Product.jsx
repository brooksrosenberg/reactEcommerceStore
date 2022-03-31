import React from 'react'


const Product = () => {
  return (
    <article className='wrapper'>
        <div className='imageContainer'>
            <img className='image' src='https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
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
    
  )
}

export default Product