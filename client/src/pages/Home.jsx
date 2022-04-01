import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import {Slider} from '../components/Slider'
import Categories from '../components/Categories'
import './home.css'
import ProductList from '../components/ProductList'


export const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <ProductList/>
    </div>
  )
}


