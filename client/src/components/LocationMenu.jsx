import './locationmenu.css'
import React from 'react'
import LocationItem from './LocationItem'
import locations from '../locations'



const locationMenu = () => {
  return (
    <div className='loc-container'>
        {locations.map(item=>(
            <LocationItem item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default locationMenu