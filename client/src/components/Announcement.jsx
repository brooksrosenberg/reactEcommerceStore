import './announcement.css'
import React from 'react'

const Announcement = () => {
  const username = localStorage.getItem('username')

  return (
    <div className='a-container'>
      {username ? (
        `Welcome ${username}!`
      ):(
        'Please Sign In'
      )}
    </div>
  )
}

export default Announcement