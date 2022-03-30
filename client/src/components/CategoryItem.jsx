import './categoryItem.css'

import React from 'react'

const CategoryItem = ({item}) => {
  return (
    <div className='ci-container'>
        <img className="ci-image" src={item.img}/>
        <div className="ci-info">
            <h1 className='ci-title'>{item.title}</h1>
            <button className='ci-button'>Shop Now</button>
        </div>
    </div>
  )
}

export default CategoryItem