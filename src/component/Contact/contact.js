import React, { useRef } from "react";
import './contact.css';
import facebook from '../../assets/facebook-icon.png';
import instagram from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';



const Contact = () =>
 {
    const form = useRef();
    const sendEmail = (e) =>
    {
        e.preventDefault();
    
        emailjs.sendForm('service_w5ullyr', 'template_a81ud7p', form.current, {publicKey: 'mIRNY4TkpTiuQa2_w',})
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    };
    return (
        <section id="contactPage">
            <div id="contact" >
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail} >
                    <validateName/>
                    <validateMessage/>
                    <validateForm/>
                    <input type="text" className="name" placeholder="Your Name"  name="from_name"  ></input>
                    <input type="email" className="email" placeholder="Your Email"  name="from_email" ></input>
                    <textarea className="msg" name="message"  rows="5"  placeholder="Your Message"></textarea>
                    <button type="submit" value='send' className="submitBtn">Submit</button>
                    
                    <div className="links">
                       <img src={facebook} alt="facebook" className="link"></img>
                       <img src={instagram} alt="instagram" className="link"></img>
                    </div>
              </form>

            </div>

        </section>
    );
}


export default Contact ;

