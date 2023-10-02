import React from "react";
import './tech.css'
import {LiaReact} from 'react-icons/lia'
import {DiCss3} from 'react-icons/di'
import {FaHtml5} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {TbBrandMysql} from 'react-icons/tb'
import {BiLogoMongodb} from 'react-icons/bi'

const Tech = () => {
    return (
        <section id="tech"> 
        <h2> Technologies I use</h2>
        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <LiaReact className="experience__details-icon"></LiaReact>
                        <h4>React</h4>
                    </article>
                    <article className="experience__details">
                        <DiCss3 className="experience__details-icon"></DiCss3>
                        <h4>CSS</h4>
                    </article>
                    <article className="experience__details">
                        <FaHtml5 className="experience__details-icon"></FaHtml5>
                        <h4>HTML</h4>
                    </article>
                    <article className="experience__details">
                        <SiJavascript className="experience__details-icon"></SiJavascript>
                        <h4>JavaScript</h4>
                    </article>
                    <article className="experience__details">
                        <SiTailwindcss className="experience__details-icon"></SiTailwindcss>
                        <h4>Tailwind</h4>
                    </article>
                </div>
            </div>
            <div className="experience__backend">
                <h3>Backend</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <FaNodeJs className="experience__details-icon"></FaNodeJs>
                        <h4>Node JS</h4>
                    </article>
                    <article className="experience__details">
                        <FaPython className="experience__details-icon"></FaPython>
                        <h4>Python</h4>
                    </article>
                    <article className="experience__details">
                        <FaJava className="experience__details-icon"></FaJava>
                        <h4>Java</h4>
                    </article>
                    <article className="experience__details">
                        <TbBrandMysql className="experience__details-icon"></TbBrandMysql>
                        <h4>MySQL</h4>
                    </article>
                    <article className="experience__details">
                        <BiLogoMongodb className="experience__details-icon"></BiLogoMongodb>
                        <h4>MongoDB</h4>
                    </article>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Tech;