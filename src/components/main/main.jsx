import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className='flex'>

      <section className='flex left-section'>
        <button className='active'>All Projects</button>
        <button>HTML && CSS</button>
        <button>JavaScript</button>
        <button>React && MUI</button>
        <button>Node && Express</button>
      </section>

      <section className='flex right-section'>

        {["aa", "bb", "cc"].map((item) => {
          return(
            <article className='card'>
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