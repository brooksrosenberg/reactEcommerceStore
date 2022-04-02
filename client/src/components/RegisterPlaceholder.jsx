import React, {useState} from 'react'
import './register.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const RegisterPlaceholder = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitForm = async () => {
    try {
    console.log(formState);
    const result = await axios.post('/api/auth/register', { ...formState })
    console.log(result);
    setFormState({
      username: '',
      email: '',
      password: '',
    });
    navigate('/');
    }   
    catch (err) {console.log(err)}
  } 

  return (
    <div className='register-body'>
    <div className='register-container'>
        <div className='register-title'>CREATE AN ACCOUNT</div>
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
            <input onClick={submitForm} type='button' value='Register'></input>
          </div>
    </div>
    </div>
  )
}

export default RegisterPlaceholder