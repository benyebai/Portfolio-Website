import './App.css';
import React from 'react';
import {useEffect} from 'react'
import pfp from './Images/76542723_p0.jpg'


import python from './Images/python.png'
import Cplusplus from './Images/cplus.png'
import Carousel from './carousel'
import webapp from './Images/logo.png'
import gicon from './Images/25231.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { SimpleSlider } from "./carousel.js"

function App() {
  useEffect(() => {
    Aos.init({duration: 2500});
  }, [])

  return (
    
    <div className="container">
      
      <nav className="navbar">
        <ul>
          <li><a href="#firstPage">HOME</a></li>
          <li><a href="#secondPage">ABOUT</a></li>
          <li><a href="#thirdPage">PROJECTS</a></li>
          <li><a href="#fourthPage">EXPERIENCES</a></li>
          <li><a href="#fifthPage">CONTACT</a></li>
        </ul>
      </nav>




      <section id="firstPage">
        <div className="IntroBox" data-aos="fade-down" data-aos-once="true">
          <h1 className="Title">
            <b>BENJAMIN</b> BAI
          </h1>

          <h1 className="Caption">
            I SUCK, NO CAP
          </h1>
        </div>
      </section>

      <section id="secondPage">
        
        <h1 className="About" data-aos="fade-down" >
          A LITTLE <br />ABOUT ME
        </h1>

        <div className="Paragraph" data-aos="fade-up" >
        <p className="Text"> SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH SHEESH</p>
        </div>

        <div className="Pic" />

      </section>

      <section id="thirdPage">
        
        <h1 className="Projects" data-aos="fade-down">
          PROJECTS
        </h1>
        <div className="carousel" data-aos="fade-up" >
          <SimpleSlider />
        </div>
      </section>

      <section id="fourthPage">
        <h1 className="Experiences" data-aos="fade-left" >EXPERIENCES</h1>
        {/*
        

        <div className="line"></div>
        <div id="box" className="python">
          <div id="textBox">
            <h1 className="blurb">
              Highly experiences with the language of python. Implemented it, into many projects and games alike.
            </h1>
          </div>


        </div>

        <div id="box" className="webDev">
          <div id="textBox2">
            <h1 className="blurb">
              Familiar with HTML, JS, React, Boostrap, PHP. Extensive knowledge of front-end, and capable in back-end web development. 
            </h1>
          </div>


        </div>

        <div id="box" className="CP">
          <div id="textBox">
            <h1 className="blurb">
              Highly experiences with the language of python. Implemented it, into many projects and games alike.
            </h1>
          </div>


        </div> */}
      
      </section>

      <section id="fifthPage">
      <h1 className="Experiences" data-aos="fade-right" >CONTACT</h1>
      </section>






    </div>
  );
}

export default App;
