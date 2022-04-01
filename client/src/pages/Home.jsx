import React from 'react'
import Announcement from '../components/Announcement'
import {Slider} from '../components/Slider'
import Categories from '../components/Categories'

import './home.css'
import ProductList from '../components/ProductList'


export const Home = () => {
  return (
    <div>
      {/* <Announcement/> */}
      <Slider/>
      <Categories/>
      <ProductList/>
    </div>
  )
}


