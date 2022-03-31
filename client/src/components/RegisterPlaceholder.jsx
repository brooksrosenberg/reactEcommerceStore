import React from 'react'
import './register.css'


const RegisterPlaceholder = () => {
  return (
    <div className='register-body'>
    <div className='register-container'>
        <div className='register-title'>CREATE AN ACCOUNT</div>
        <form action='#'></form>
          <div className='register-user-details'>
            <div className='input-box'>
              <span className='details'>Username</span>
              <input type='text' placeholder='Enter your username' required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Email</span>
              <input type='email' placeholder='Enter your email' required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Password</span>
              <input type='password' placeholder='Enter your password' required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Confirm Password</span>
              <input type='password' placeholder='Confirm your password' required></input>
            </div>
          </div>
          <div className='register-button'>
            <input type='submit' value='Register'></input>
          </div>
    </div>
    </div>
  )
}

export default RegisterPlaceholder