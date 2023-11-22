import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
    <footer className='flex'>

      <ul className='flex'>
        <li><Link to="">About</Link></li>
        <li><Link to="">Projects</Link></li>
        <li><Link to="">Speaking</Link></li>
        <li><Link to="">Uses</Link></li>
      </ul>

      <p>© Jonathan Arriazu. All rights reserved.</p>

    </footer>

  )
}

export default Footer