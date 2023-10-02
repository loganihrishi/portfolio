import React from "react";
import {GrLinkedin} from 'react-icons/gr'
import {GrGithub} from 'react-icons/gr'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocials = () => {
    return (
        <div className="header_socials">
        <a href="https://www.linkedin.com/in/loganihrishi" target="_blank"><GrLinkedin/></a>
        <a href="https://github.com/loganihrishi" target="_blank"><GrGithub/></a>
        <a href="https://www.instagram.com/logani.hrishi/" target="_blank"><GrInstagram/></a>
    </div>
    )
}

export default HeaderSocials;