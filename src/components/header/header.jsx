import React, { useEffect, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('currentMode') ?? 'dark');

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
            <Link to="">About</Link>
            </li>
          <li>
            <Link to="">Articles</Link>
            </li>
          <li>
            <Link to="">Projects</Link>
            </li>
          <li>
            <Link to="">Speaking</Link>
            </li>
          <li>
            <Link to="">Contact</Link>
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
          <li><Link to="">About</Link></li>
          <li><Link to="">Articles</Link></li>
          <li><Link to="">Projects</Link></li>
          <li><Link to="">Speaking</Link></li>
          <li><Link to="">Uses</Link></li>
        </ul>
      </div>
      )}

      
    </header>
  )
}

export default Header