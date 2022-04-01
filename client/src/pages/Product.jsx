import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import './product.css'
import axios from 'axios';



const Product = () => {
    const params = useParams();
    console.log(params);
    const baseURL = `/api/product/${params.id}`

    const [products, setProduct] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setProduct(response.data);
            console.log(response.data)
            console.log(products)
        })
    }, [])

    if (!products) return null
    console.log(products)
    
    return (
        <div>
            <article className='productwrapper'>
                <div className='imageContainer'>
                    <img className='image' src={products.img}/>
                </div>
                <div className='infoContainer'>
                    <span className='title'> {products.title} </span>
                    <p className='description'>{products.description}</p>
                    <span className='price'> $ {products.price} </span>
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
                        <div className='divSize'>
                            <span className='filterSize'>Size</span>
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