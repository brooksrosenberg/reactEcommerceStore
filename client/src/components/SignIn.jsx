import './signin.css'
import React from 'react'

const SignIn = () => {
  return (
    <section className='container'>
        <div className='wrapper'> 
            <title className='tittle'> SIGN IN  </title>
            <form className='form'>
                <input placeholder='username' className='input'/>
                <input placeholder='password' className='input'/>
                <button className='button'> LOGIN </button>
                <p className='link'> 
                  <a href='#'>
                    CREATE A NEW ACCOUNT
                  </a> 
                </p>
            </form>
        </div>
    </section>
  )
}

export default SignIn