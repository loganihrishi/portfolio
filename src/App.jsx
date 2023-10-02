import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/contact/contact'
import Tech from './components/technologies/tech'
import Footer from './components/footer/footer'
const App = () => {
   return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Tech/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
   )
}

export default App