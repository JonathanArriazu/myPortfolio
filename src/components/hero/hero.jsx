import React from 'react';
import './hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {

  const {t} = useTranslation();

  return (
      <section className='flex hero'>

        {/* {t('')} */}

        <div className='flex left-section'>
            <img className='photo' src="./images/me.jpg" alt="me" />          
        </div>

        <div className='flex right-section'>
          <h3 className='sub-title'>
            {t('hi')}
          </h3>
          <h1 className='title'>
            Jonathan Arriazu,
          </h1>
          <p className='text'>
            {t('im')} <span className='front-end'>{t('frontend-dev')}</span> {t('presentation')}
          </p>
          <div className='flex button-container'>
            <button>
              <a className='resume-button' href="./resume/Jonathan-Arriazu-React-Frontend-dev.pdf" download="Jonathan Arriazu React Frontend Dev">{t('download-cv')}</a>
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