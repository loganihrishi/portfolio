import React from "react";
import './header.css'
import CTA from './CTA'
import profile from '../../assets/profile.png'
import HeaderSocials from "./HeaderSocials";
import Typed from 'typed.js'
import { useEffect, useRef } from "react";

const Header = () => {
    const typedRef = useRef(null);
    const spanRef = useRef(null); 
  
    const options = {
      strings: ["a Software Developer...", "a Designer...", "a Collaborator...", "a dedicated learner..."],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
      onComplete: () => {
      },
    };
  
    useEffect(() => {
      typedRef.current = new Typed(spanRef.current, options);
      
      return () => {
        if (typedRef.current) {
          typedRef.current.destroy();
        }
      };
    }, []);
  
    return (
      <header>
        <div className="container header__container">
          <h5> Hello I'm </h5>
          <h1> Hrishi </h1>
          {/* Attach the ref to the span element */}
          <h5 id = 'animation' className="text-light"><span className="auto-type" ref={spanRef}></span></h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={profile} alt="" />
          </div>
        </div>
      </header>
    );
  };

  
export default Header