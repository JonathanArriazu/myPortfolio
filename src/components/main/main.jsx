import React, { useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';

const Main = () => {

  const [currentActive, setCurrentActive] = useState('all');
  const myProjects = ['aa', 'bb', 'cc']

  return (
    <main className='flex'>

      <section className='flex left-section'>
        <button onClick={() => {setCurrentActive('all')}} className={currentActive === 'all' ? 'active' : null}>All Projects</button>
        <button onClick={() => { setCurrentActive('html-css')}} className={currentActive === 'html-css' ? 'active' : null}>HTML && CSS</button>
        <button onClick={() => { setCurrentActive('js')}} className={currentActive === 'js' ? 'active' : null}>JavaScript</button>
        <button onClick={() => { setCurrentActive('react')}} className={currentActive === 'react' ? 'active' : null}>React && MUI</button>
        <button onClick={() => { setCurrentActive('node-express')}} className={currentActive === 'node-express' ? 'active' : null}>Node && Express</button>
      </section>

      <section className='flex right-section'>

        {myProjects.map((item) => {
          return(
            <article key={item} className='card'>
              <img width={266} src="./js.jpeg" alt="" />

              <div style={{width: '266px'}} className='box'>
                <h1 className='title'>Landing Page 2</h1>
                <p className='sub-title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nesciunt qui deleniti cum illum harum. </p>
                
                <div className='flex icons'>
                  <div style={{gap: '11px'}} className='flex'>
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <Link className='flex link' to="">
                    more
                    <span className='icon-arrow-right'></span>
                  </Link>
                </div>

              </div>
            </article>   
          )
        })}        

      </section>

    </main>
  )
}

export default Main