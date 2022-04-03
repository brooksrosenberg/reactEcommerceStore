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
    console.log(event.target.name)
    console.log(event.target.value)

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [confirmpassword, setConfirmedPassword] = useState('')

  const submitForm = async () => {
    if (formState.password !== confirmpassword) {
      alert ("Password does not match. What a memory!!")
      return
    }

    try {
    console.log(formState);
    const result = await axios.post('/api/auth/register', { ...formState })
    // localStorage setItem
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
              <input onChange={handleChange} className='response' type='text' placeholder='Enter your username' name='username' value={formState.username} required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Email</span>
              <input onChange={handleChange} className='response' type='email' placeholder='Enter your email' name='email' value={formState.email} required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Password</span>
              <input onChange={handleChange} className='response' type='password' placeholder='Enter your password' name='password' value={formState.password} required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Confirm Password</span>
              <input onChange={(event) => setConfirmedPassword(event.target.value)} className='response' type='password' placeholder='Confirm your password' name='confirmpassword' value={confirmpassword} required></input>
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