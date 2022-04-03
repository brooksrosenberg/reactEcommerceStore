import './signin.css'
import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'


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
        console.log(result.data)
        console.log(result.data.accessToken)
        const token = result.data.accessToken
        const username = result.data.username
        const isAdmin = result.data.isAdmin
        const userId = result.data._id

        localStorage.setItem("token", token)
        localStorage.setItem('username', username)
        localStorage.setItem('isAdmin', isAdmin)
        localStorage.setItem('userId', userId)

        const tokenTest = localStorage.getItem('token')
        console.log(`token ${tokenTest}`)

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
                <button className='login-button'> LOGIN </button>
                <Link to="/register">
                <p className='link'> 
                    CREATE A NEW ACCOUNT
                </p>
                </Link>
            </form>
        </div>
    </section>
  )
}

export default SignIn