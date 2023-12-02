import React, { useEffect, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({locale, handleChange}) => {

  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('currentMode') ?? 'dark');

  const {t} = useTranslation();

  useEffect(() => {
    
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }

  }, [theme])
  

  return (    
    <header className='flex'>
        <button 
          className='flex menu icon-menu' 
          onClick={() => {setShowModal(true)}}
        />
        <nav className='color'>
          <ul className='flex'>
            <li>
              <a href="#top">{t('home')}</a>
              </li>
            <li>
              <a href="#about">{t('about-me')}</a>
              </li>
            <li>
              <a href="#skills">{t('skills')}</a>
              </li>
            <li>
              <a href="#projects">{t('projects')}</a>
              </li>
            <li>
              <a href="#contact">{t('contact-header')}</a>
              </li>
          </ul>
        </nav>

        <button 
          className='flex mode'
          onClick={() => {
            localStorage.setItem('currentMode', theme === 'dark' ? 'light' : 'dark');
            
            setTheme(localStorage.getItem('currentMode'));
          }}
        >
          {theme === 'dark' ? (
            <span className='icon-sun'></span>
          ) : (<span className='icon-moon-o'></span>        
          )}        
        </button>
        
        <div>
          <button 
            className='language-change'
            onClick={() => handleChange(locale === 'en' ? 'es' : 'en')}>
            {locale === 'en' ? 'ES' : 'EN'}
          </button>
        </div>

      {showModal && (
        <div className='fixed'>
        <ul className='modal'>
          <li>
            <button 
              className='icon-close'
              onClick={() => {
                setShowModal(false)
              }}
            />
          </li>
          <li>
            <a 
              href="#top"
              onClick={() => {
                setShowModal(false)
              }}
            >{t('home')}</a></li>
          <li>
            <a 
              href="#about"
              onClick={() => {
                setShowModal(false)
              }}
              >{t('about-me')}</a>
          </li>
          <li>
            <a 
              href="#skills"
              onClick={() => {
                setShowModal(false)
              }}
              >{t('skills')}</a>
          </li>
          <li>
            <a 
              href="#projects"
              onClick={() => {
                setShowModal(false)
              }}
              >{t('projects')}</a>
          </li>
          <li>
            <a 
              href="#contact"
              onClick={() => {
                setShowModal(false)
              }}
              >{t('contact-header')}
            </a>
          </li>
        </ul>
      </div>
      )}

      
    </header>
  )
}

export default Header