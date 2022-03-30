import './categories.css'
import React from 'react'
import CategoryItem from './CategoryItem'
import  categories  from '../data'

const Categories = () => {
  return (
    <div className='cat-container'>
        {categories.map(item=>(
            <CategoryItem item={item}/>
        ))}  
    </div>
  )
}

export default Categories