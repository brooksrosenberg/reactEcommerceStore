import './product.css'
import React, { useState, useEffect } from 'react'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons'

const Product = ({ item }) => {
  return (
    <div className='p-container'>
        <div className='p-description'>
          <p className='p-text'>This is demonstration text</p>
        </div>
        <img src={item.img} className='p-image'></img>
        <div className="p-info">
          <div className="p-icon">
            <ShoppingCartOutlined/>
          </div>
          <div className="p-icon">
            <FavoriteBorderOutlined/>
          </div>
          <div className="p-icon">
            <SearchOutlined/>
          </div>
        </div>
        
      </div>
      )
}

      export default Product