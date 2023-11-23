import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className='contact-me'>

      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact me
      </h1>
      <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni atque perspiciatis at?</p>

      <div className="flex">
        <form>

          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name='' id='email' />
          </div>

          <div className='flex' style={{marginTop: '24px'}}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="" id="message"></textarea>
          </div>

          <button className='submit'>Submit</button>
        </form>
        <div className='border animation'>a</div>
      </div>

    </section>
  )
}

export default Contact