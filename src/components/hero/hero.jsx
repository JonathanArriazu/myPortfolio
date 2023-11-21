import React from 'react';
import './hero.css';
import devAnimation from "/public/animation/dev1.json"
import Lottie from 'lottie-react';

const Hero = () => {
  return (
      <section className='flex hero'>

        <div className='left-section'>
          <div className="parent-avatar">
            <img className='avatar' src="./me.jpg" alt="my photo" />
          </div>
          <h1 className='title'>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className='sub-title'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem culpa ipsum minus aut possimus accusamus quis voluptatum sit cumque debitis commodi rerum, qui dolorum ducimus maiores deleniti? Ipsa, aliquid illum aut enim laudantium quam, voluptas consectetur, rerum officia ea officiis?
          </p>
          <div className='flex all-icons'>
            <div className="icon icon-github"></div>
            <div className="icon icon-linkedin"></div>
          </div>
        </div>

        <div className='right-section animation'>
          <Lottie 
            className='dev-animation'
            animationData={devAnimation}
          />
        </div>

      </section>
  )
}

export default Hero