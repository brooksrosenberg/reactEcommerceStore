import React from 'react'
import './slider.css'
import Vans from '../img/pexels-garrett-morrow-702350.jpg'
import { Link } from 'react-router-dom' 


export const Slider = () => {
    return (
        <div className='slider-container'>
            <div className="slider-wrapper">
                <div className="image-container">
                    <img className='slider-bg' src={Vans}></img>
                </div>
                <div className="info-container">
                    <h1 className='slider-title'>New Spring Mens's Collection</h1>
                    <p className='slider-description'>Checkout the new Spring Men's Collection</p>
                    <Link to='/category/Mens'>
                    <button className='slider-button'>Go!</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
