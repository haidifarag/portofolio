import React from "react";
import './works.css';
import portfolio1 from '../../assets/port1.png';
import portfolio2 from '../../assets/port2.png';
import portfolio4 from '../../assets/port4.png';
import portfolio5 from '../../assets/port5.png';
import portfolio6 from '../../assets/port6.png';
import portfolio7 from '../../assets/port7.png';


const Works = () => {
    return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">Welcome to my portfolio! My design philosophy revolves around creating seamless and intuitive user experiences while pushing the boundaries of creativity.</span>
        <div className="work-list">
        
        <div className="worksImgs">
             <img src={portfolio2} alt="" className="worksImg" ></img>
                <div className="layer">
                     <h3>Dwelling</h3>
                     <p>A comprehensive real estate website showcasing listings with detailed information and interactive search features. </p>
                     <a href="https://dwelling-3cd42.web.app"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
        </div>

        <div className="worksImgs">
            <img src={portfolio7} alt="" className="worksImg" ></img>
                <div className="layer">
                     <h3>Image Search Engine</h3>
                     <p>These platforms simplify the process of finding relevant images for various needs and interests.</p>
                     <a href="https://haidifarag.github.io/Image-Search-Engine/"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
        </div>

        <div className="worksImgs">
            <img src={portfolio1} alt="" className="worksImg" ></img>
                <div className="layer">
                     <h3>Validation Form</h3>
                     <p>A validation form ensuring accuracy and completeness of user input. </p>
                     <a href="https://haidifarag.github.io/Form-Validation/"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
        </div>
        <div className="worksImgs">
            <a href="https://github.com/haidifarag "><img src={portfolio5} alt="" className="worksImg" ></img></a>
                <div className="layer">
                     <h3>Zennifer</h3>
                     <p>A frontend website showing one page. </p>
                     <a href="https://haidifarag.github.io/Responsive-Website/"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
        </div>

        <div className="worksImgs">
            <img src={portfolio4} alt="" className="worksImg" ></img>
                <div className="layer">
                     <h3>Text To Speech</h3>
                     <p>A text-to-speech app converting written text into spoken words with natural-sounding voices. </p>
                     <a href="https://haidifarag.github.io/Text-to-speech-converter/"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
        </div>
        
        <div className="worksImgs">
           <img src={portfolio6} alt="" className="worksImg" ></img>
                <div className="layer">
                     <h3>Quiz App</h3>
                     <p>A dynamic quiz app offering engaging questions across various topics with interactive features.</p>
                     <a href="https://haidifarag.github.io/Quiz-App/"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
        </div>
        
        

        </div>

        
    </section>
   )
}

export default Works;
