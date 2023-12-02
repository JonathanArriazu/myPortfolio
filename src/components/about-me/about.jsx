import React from 'react'
import './about.css'
import { useTranslation } from 'react-i18next';

const About = () => {

  const {t} = useTranslation();

  return (
    <section className='about-me' id='about'>
      <h1 className='about-title'>{t('about-me')}</h1>
      <div className="flex about-information-container">
        <div className='flex about-information'>
          <h3 className='about-name'>Arriazu Jonathan</h3>
          <small className='about-profession'>{t('frontend-dev')}</small>
          <p className='about-text'>{t('about-me-info')}</p>
          <ul>
            <li>
              <strong>{t('studies')}</strong><p>{t('studies-info')}</p>
            </li>
            <li>
              <strong>{t('experience')}</strong><p>{t('experience-info')}</p>
            </li>
            <li>
              <strong>Email:</strong><p>joni.arriazu2@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className='about-image-container'>
          <img className='about-image' src="./images/about-img.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default About