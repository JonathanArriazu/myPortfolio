import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const {t} = useTranslation();

  return (
    
    <footer className='flex'>

      <p>Copyright © 2023, Jonathan Arriazu. {t('copyright')}</p>

    </footer>

  )
}

export default Footer