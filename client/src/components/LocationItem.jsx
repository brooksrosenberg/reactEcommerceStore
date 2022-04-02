import React from 'react'
import './locationitem.css'
import { Link } from 'react-router-dom'

const LocationItem = ({item}) => {
  return (
    <div className='li-container'>
        <img className="li-image" src={item.img}/>
        <div className="li-info">
            <h1 className='li-title'>{item.title}</h1>
        <Link to={`/location/${item.title}`}>    
            <button className='li-button'>Shop Now</button>
        </Link>   
        </div>
    </div>
   
  )
}

export default LocationItem