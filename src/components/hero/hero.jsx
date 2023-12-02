import React from 'react';
import './hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {

  const {t} = useTranslation();

  return (
      <section className='flex hero'>

        <h1>{t('welcome')}</h1>
        <div>{t('language')}</div>

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
            <button>
              <a className='resume-button' href="./resume/Jonathan-Arriazu-React-Frontend-dev.pdf" download="Jonathan Arriazu React Frontend Dev">Download Resume</a>
            </button>
          </div>
          <div className='flex all-icons'>
            <a className="icon icon-github" href='https://github.com/JonathanArriazu' target='blank'></a>
            <a className="icon icon-linkedin" href='https://www.linkedin.com/in/jonathanarriazu/' target='blank'></a>
          </div>
        </div>

      </section>
  )
}

export default Hero