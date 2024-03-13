import React, {useState} from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'

const Navbar = () => {
  const [showMenu , setShowMenu ] = useState(false);
    return (
    <nav className="Navbar">
      <img src={logo} alt="logo" className="logo"/>

      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"> Home </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem"> About </Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem"> Portofolio </Link>
      </div>
        
       <button className="desktopMenuBtn" onClick={() =>{
         document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
       }}>
          <img src={contactImg} alt=" " className="desktopMenuImg"/>Contact Me</button>
          
          <button className="mobMenu" onClick={()=>setShowMenu(!showMenu)} ><i class="fa-sharp fa-solid fa-bars"></i></button>
          {/*<img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>*/}

          <div className="navMenu" style={{display: showMenu? 'flex':'none'}} >
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)} > Home </Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)} > About </Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)} > Portofolio </Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)} > Contact </Link>

          </div>
    
    </nav>
   )
}

export default Navbar;
