import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  const [showModal, setShowModal] = useState(false);

  return (    
    <header className='flex'>
      <button 
        className='flex menu icon-menu' 
        onClick={() => {setShowModal(true)}}
      />
      <nav>
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

      <button className='flex mode'>
        <span className='icon-moon-o'></span>
      </button>

      {showModal && (
        <div className='border fixed'>
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