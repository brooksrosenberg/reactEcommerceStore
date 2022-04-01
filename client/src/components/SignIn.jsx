import './signin.css'
import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SignIn = () => {
  const navigate= useNavigate();
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    });
    const handleChange = (event) => {
      const { name, value } = event.target; 

      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const submitForm = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const result = await axios.post('/api/auth/login', { ...formState })
        console.log(result);
        setFormState ({
          username: '',
          password: '',
        });
        navigate('/');
      }
      catch (err) {console.log(err)}
    }

  return (
    <section className='container'>
        <div className='wrapper'> 
            <div className='signin-title'> SIGN IN  </div>
            <form onSubmit={submitForm} className='form'>
                <input name='username' value={formState.username} onChange={handleChange} placeholder='username' className='input'/>
                <input name='password' value={formState.password} onChange={handleChange} type='password' placeholder='password' className='input'/>
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