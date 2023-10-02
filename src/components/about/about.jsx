import React from 'react'
import './about.css'
import profile from '../../assets/Profile.jpeg'
import {DiJava} from 'react-icons/di'

const About = () => {
    return (
        <section id= 'about'> 
        <h1>Let's Talk</h1>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src = {profile}></img>
                </div>
            </div>
            <div className="about__content">
               <p id='mainPara'>
               Hello, I'm Hrishi, a sophomore at the University of British Columbia majoring in Statistics. I'm skilled in Java, Node.js, React, and Python, using these languages to create innovative solutions. 
               <br></br>
               <br></br>
               I'm passionate about learning and constantly explore new technologies through personal projects.
               <br></br>
               <br></br>
               Outside of coding, I'm dedicated to my fitness journey, regularly working out to stay active and healthy. Thanks for visiting my portfolio. Let's connect and collaborate on exciting projects together!
               </p>
               <a href='#contact' className='btn btn-primary' id = 'chatButton'> Let's Chat</a>
            </div>
        </div>
         </section>
    )
}

export default About;