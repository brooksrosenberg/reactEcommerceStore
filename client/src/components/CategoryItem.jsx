import './categoryItem.css'
import { Link } from 'react-router-dom';

import React from 'react'

const CategoryItem = ({item}) => {
  return (
    <div className='ci-container'>
        <img className="ci-image" src={item.img}/>
        <div className="ci-info">
            <h1 className='ci-title'>{item.title}</h1>
        <Link to={`/category/${item.title}`}>    
            <button className='ci-button'>Shop Now</button>
         </Link>   
        </div>
    </div>
  )
}

export default CategoryItem