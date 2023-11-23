import React from 'react';
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  const [state, handleSubmit] = useForm("xpzggaav");
  
  return (
    <section className='contact-me'>

      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact me
      </h1>
      <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni atque perspiciatis at?</p>

      <div className="flex">
        <form onSubmit={handleSubmit}>

          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name='email' id='email' />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex' style={{marginTop: '24px'}}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>

          <button 
          className='submit'
          type="submit" 
          disabled={state.submitting}
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p style={{fontSize: '18px', marginTop: '1.7rem'}}>Your message has been sent successfully</p>
            )}

        </form>
        <div className='border animation'>a</div>
      </div>

    </section>
  )
}

export default Contact