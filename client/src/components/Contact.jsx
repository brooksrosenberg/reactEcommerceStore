import './contact.css'
import React from 'react'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    //emailjs function
    //Importin form reference from react and passing it to the form tag as a reference
    const formRef = useRef()
    //use State
    const [done, setDone] = useState(false)
    //function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_eea4bqg', 'template_57fcrbv', formRef.current, 'y2-uDLRs5AvWjVBRW')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            },
                (error) => {
                    console.log(error.text);
                })
    }
    return (
        <div className='c-container'>
            <p className="c-desc">If you would like to be featured on this site, please use this form to contact us</p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className='form-container'>
                <input type="text" placeholder='Name' name="user_name" />
                <input type="text" placeholder='Subject' name="user_subject" />
                <input type="text" placeholder='Email' name="user_email" />
                <textarea rows="5" placeholder='Message' name="message" />
                </div>
                <button className='c-button'>submit</button>
                {done && <div className='thanks'>Thank you!</div>}
            </form>
        </div>
    )
}

export default Contact