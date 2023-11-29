import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Main from './components/main/main';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Skills from './components/skills/skills';

function App() {

  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrollY(true)
      } else {
        setScrollY(false)
      }
    })
  }, [])
  

  return (
    <div id='top' className='container'>
      <Header  />
      <Hero />      
      <div className='divider'></div>
      <Skills/>
      <div className='divider'></div>
      <Main />
      <div className='divider'></div>
      <Contact />
      <div className='divider'></div>
      <Footer />

      
      {
        scrollY && (
          <a href="#top">
            <button className='scrollToTop icon-keyboard_arrow_up'></button>
          </a>
        )
      }

      {/* <a href="#top" style={{opacity: scrollY ? 1 : 0, transition: '1s'}} >
        <button className='scrollToTop icon-keyboard_arrow_up'></button>
      </a> */}

      
    </div>
  );
}

export default App;
