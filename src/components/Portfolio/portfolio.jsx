import React from "react";
import './portfolio.css'
import {GrGithub} from 'react-icons/gr'
import chatsync from '../../assets/chatsync.jpeg'
import hms from '../../assets/HMS.jpeg';
import infRunner from '../../assets/InfRunner.jpeg'
import MazeEs from '../../assets/MazeEscaper.jpeg'

const projects = [
   {
      id: 1, 
      image: chatsync,
      title: "ChatSync", 
      github: 'https://github.com/loganihrishi/ChatSync'
   }, 
   {
      id: 2, 
      image: infRunner, 
      title: "Infinite Runner", 
      github: 'https://github.com/loganihrishi/InfiniteRunner'
   },
   {
      id: 3, 
      image: MazeEs, 
      title: "Maze Escaper", 
      github: 'https://github.com/loganihrishi/MazeEscaper'
   },
   {
      id: 4, 
      image: hms, 
      title: "Healthcare Management System", 
      github: 'https://github.com/loganihrishi/Healthcare-Management-System'
   }
]

const Portfolio = () => {
   return (
    <section id='portfolio'> 
    <h5>My Work</h5>
    <h2>Projects</h2>
    <div className="container portfolio__container">
      {
         projects.map(({id, image, title, github}) => {
            return (
               <article className="portfolio__item">
                  <div className="portfolio__item-image">
                     <img src= {image} className="blur-image"></img>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                     <a href={github} target="_blank"><GrGithub></GrGithub></a>
                  </div>
               </article>
            )
         })
      }
    </div>
    </section>
   )
}

export default Portfolio