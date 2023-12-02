import React, { useEffect, useState } from 'react';
import './App.css';

import i18n from './i18n';

import LocaleContext from './context/LocaleContext';

import Header from './components/header/header';
import Hero from './components/hero/hero';
import Main from './components/main/main';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Skills from './components/skills/skills';
import About from './components/about-me/about';

function App() {

  const [scrollY, setScrollY] = useState(false);
  const [locale, setLocale] = useState(i18n.language);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrollY(true)
      } else {
        setScrollY(false)
      }
    })
  }, [])


  i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  

  const handleChange = (newLocale) => {
    i18n.changeLanguage(newLocale) //en or es
  }
  

  return (
    <div id='top' className='container'>
      <LocaleContext.Provider value={{locale, setLocale}}>
        <Header locale={locale} handleChange={handleChange} />
        <Hero /> 
        <div className='divider'></div>
        <About />
        <div className='divider'></div>
        <Skills/>
        <div className='divider'></div>
        <Main />
        <div className='divider'></div>
        <Contact />
        <div className='divider'></div>
        <Footer />
      </LocaleContext.Provider>

      
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
