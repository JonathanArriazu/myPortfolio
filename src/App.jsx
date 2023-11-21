import React from 'react';
import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Main from './components/main/main';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <div className='divider'></div>
      <Main />
      <div className='divider'></div>
      <Contact />
      <div className='divider'></div>
      <Footer />
    </div>
  );
}

export default App;
