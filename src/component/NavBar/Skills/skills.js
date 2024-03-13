import React from "react";
import './skills.css';
import UIDesign from '../../../assets/ui-design.png'
import html from '../../../assets/html.png';
import css from '../../../assets/css.png'
import js from '../../../assets/js.png'
import react from '../../../assets/react.png'
import AppDesign from '../../../assets/app-design.png'


const Skills = () => {
    return (
    <section id="skills">
    <span className="skillTitle">what I do </span>
    <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly website.I have a strong understanding of designand a keen eye for detail.</span>
    <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>UI / UX Design</h2>
            </div>
        </div>

        <div className="skillBar">
            <img src={html} alt="WebDesign" className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>Html</h2>
            </div>
        </div>

        <div className="skillBar">
            <img src={css} alt="WebDesign" className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>CSS </h2>
            </div>
        </div>
        <div className="skillBar">
            <img src={js} alt="WebDesign" className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>JavaScript </h2>
            </div>
        </div>
        <div className="skillBar">
            <img src={react} alt="WebDesign" className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>React.js </h2>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="APPDesign" className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>Responsive Design </h2>
            </div>
        </div>
    </div>
    </section>
   )
}

export default Skills;
