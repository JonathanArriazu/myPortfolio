import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills' className='skills-container'>
        <div className='skills-wrapper'>
            <h1 className='title'>Skills</h1>
            <p className='text'>During my career, I have studied and specialized in the following technologies:</p>
            <div className='skills-images'>
                <a className='skill' href="https://en.wikipedia.org/wiki/HTML">
                    <img alt="html" src="./images/skills/html.svg"/>
                    <p className='icon-text'>HTML</p>
                </a>
                <a className='skill' href="https://en.wikipedia.org/wiki/CSS">
                    <img alt="css3" src="./images/skills/css3.svg"/>
                    <p className='icon-text'>CSS</p>
                </a>
                <a className='skill' href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)">
                    <img alt="sass" src="./images/skills/sass.svg"/>
                    <p className='icon-text'>SASS</p>
                </a>
                <a className='skill' href="https://en.wikipedia.org/wiki/Git">
                    <img alt="bootstrap" src="./images/skills/bootstrap.svg"/>
                    <p className='icon-text'>BOOTSTRAP</p>
                </a>
                <a className='skill' href="https://en.wikipedia.org/wiki/JavaScript">
                    <img alt="javascript" src="./images/skills/javascript.svg"/>
                    <p className='icon-text'>JAVASCRIPT</p>
                </a>
                <a className='skill' href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
                    <img alt="reactjs" src="./images/skills/reactjs.svg"/>
                    <p className='icon-text'>REACTJS</p>
                </a>
                <a className='skill' href="https://en.wikipedia.org/wiki/Next.js">
                    <img alt="nextjs" src="./images/skills/nextjs.svg"/>
                    <p className='icon-text'>NEXTJS</p>
                </a>
                <a className='skill' href="https://en.wikipedia.org/wiki/Git">
                    <img alt="git" src="./images/skills/git.svg"/>
                    <p className='icon-text'>GIT</p>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Skills