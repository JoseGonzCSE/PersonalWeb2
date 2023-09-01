import './Contact.css'
import frontEndImg from './Imgs/greg-rakozy-vw3Ahg4x1tY-unsplash.jpg'
import BackEndImg from './Imgs/altumcode-PNbDkQ2DDgM-unsplash.jpg'
import PersonalImg from './Imgs/dan-dimmock-sNwnjxm8eTY-unsplash.jpg'
import React, { useRef } from 'react';
import 'animate.css'

export default function Contact({contactRef}){
    return(
        <div ref={contactRef}>
            <div className="mainContainer">
                <h1 className="Skill_Title">Skills</h1>
                <div className="container">
                    <div className="frontEnd">
                        <h2>Front-end</h2>
                        <img src={frontEndImg}alt="Front-end" className="image"/>
                        <div className="skills">
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">React</div>
                        </div>
                    </div>
                    <div className="backEnd">
                        <h2>Back-end</h2>
                        <img src={BackEndImg}alt="Back-end" className="image2"/>
                        <div className="skills">
                        <div className="skill">Python</div>
                        <div className="skill">Django</div>
                        <div className="skill">C++</div>
                        <div className="skill">SQLite</div>
                        </div>
                    </div>
                    <div className="personal">
                        <h2>Personal</h2>
                        <img src={PersonalImg} alt="Personal" className="image3"/>
                        <div className="skills">
                        <div className="skill">Communication</div>
                        <div className="skill">Team Management</div>
                        <div className="skill">Project Organization</div>
                        <div className="skill">Problem Solving</div>
                        </div>
                    </div>
                </div>
                <a href = "mailto: j.andresgonzalez1010@gmail.com" className='email'> 📧 j.andresgonzalez1010@gmail.com</a>
            </div>
        </div>
    )
}