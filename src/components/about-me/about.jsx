import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className='about-me' id='about'>
      <h1 className='about-title'>About me</h1>
      <div class="flex about-information-container">
        <div className='flex about-information'>
          <h3 className='about-name'>Arriazu Jonathan</h3>
          <small className='about-profession'>Frontend Developer</small>
          <p className='about-text'>I'm a Frontend Web developer and have been working in the web development industry for 1 year. I'm dedicated to developing &amp; optimizing interactive and user-friendly websites, by writing clean and optimized code. I also enjoy to collaborate with cross-functional teams to produce high-quality applications. If you are looking for someone like me to hire, please feel free to get in touch.</p>
          <ul>
            <li>
              <strong>Expertise:</strong><p>Frontend Web Development</p>
            </li>
            <li>
              <strong>Studies:</strong><p>1 Year in Rolling Code School - FullStack Developer</p>
            </li>
            <li>
              <strong>Experience:</strong><p>1 Year at Siltium as Frontend Developer</p>
            </li>
            <li>
              <strong>Email:</strong><p>joni.arriazu2@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className='about-image-container'>
          <img className='about-image' src="./images/about-img.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default About