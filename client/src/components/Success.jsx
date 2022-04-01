import React from 'react'
import './success.css'
import {useNavigate} from 'react-router-dom'

const Success = () => {
  const navigate = useNavigate();
  const submitForm = async () => {
    try {
    navigate('/');
    }
    catch (err) {console.log(err)}
  } 

  return (
    <div className='success-container'>
        <img src="https://images.pexels.com/photos/3905859/pexels-photo-3905859.jpeg" className='success-image'></img>
        <h1>Success!</h1>
        <h4>Order complete. Thanks for choosing Craft!</h4>
        <div className='back-button'>
            <input onClick={submitForm} type='button' value='Back to Home'></input>
        </div>
    </div>
  )
}

export default Success