import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import {Slider} from '../components/Slider'
import Categories from '../components/Categories'
import SignIn from '../components/SignIn'
import './home.css'


export const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <SignIn />
    </div>
  )
}


