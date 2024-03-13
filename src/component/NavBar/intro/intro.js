import React from "react";
import './intro.css';
import bg from '../../../assets/image.png'
import {Link} from 'react-scroll';
import btnImg from '../../../assets/hireme.png' 

const Intro = () => {
    return (
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">I’m <span className="introName">Haidi</span><br/>Website Designer</span>
        <p className="introPara">I am a skilled web designer with experience in creating <br/>visually appealing and user-friendly website</p>
        <Link activeClass="active" to="contact" smooth={true} offset={-50} duration={500} ><button className="btn"><img src={btnImg} alt="hire me" className="btnImg"/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile " className="bg"></img>
    </section>
   )
}

export default Intro;
