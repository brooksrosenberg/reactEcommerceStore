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
              <input className='response' type='text' placeholder='Enter your username' required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Email</span>
              <input className='response' type='email' placeholder='Enter your email' required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Password</span>
              <input className='response' type='password' placeholder='Enter your password' required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Confirm Password</span>
              <input className='response' type='password' placeholder='Confirm your password' required></input>
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