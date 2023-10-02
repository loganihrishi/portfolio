import React from "react";
import './footer.css'
import {GrLinkedin} from 'react-icons/gr'
import {GrGithub} from 'react-icons/gr'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
    return (
       <footer>
        <a href="#" className="footer__logo"></a>
        <ul className="permalink">
            <li> <a href="#">Home </a></li>
            <li> <a href="#about">About </a></li>
            <li> <a href="#portfolio">Projects </a></li>
            <li> <a href="#contact">Contact </a></li>
        </ul>

        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/loganihrishi" target="_blank"><GrLinkedin/></a>
        <a href="https://github.com/loganihrishi" target="_blank"><GrGithub/></a>
        <a href="https://www.instagram.com/logani.hrishi/" target="_blank"><GrInstagram/></a>
        </div>
       </footer>
    )
}

export default Footer;