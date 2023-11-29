import React from 'react';
import './hero.css';
import devAnimation from "/public/animation/dev1.json"
import Lottie from 'lottie-react';

const Hero = () => {
  return (
      <section className='flex hero'>

        <div className='flex left-section'>
            <img className='photo' src="./images/me.jpg" alt="me" />          
        </div>

        <div className='flex right-section'>
          <h3 className='sub-title'>
            Hi, I'm
          </h3>
          <h1 className='title'>
            Jonathan Arriazu,
          </h1>
          <p className='text'>
            I'm a <span className='front-end'>Frontend Developer</span> from Argentina with a passion for frontend web development. Welcome to my portfolio. I'm glad you're here!
          </p>
          <div className='flex button-container'>
            <button>Download CV</button>
          </div>
          <div className='flex all-icons'>
            <div className="icon icon-github"></div>
            <div className="icon icon-linkedin"></div>
          </div>
        </div>

      </section>
  )
}

export default Hero