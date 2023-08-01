import './AboutMe.css'
import Img2 from './Imgs/Img2.jpg'
import React, { useRef } from 'react';


export default function AboutMe({aboutMeRef}){
    return (
        <div ref={aboutMeRef}>
            <div className="All">
                <div className="A_pageLeft">
                    <div className="A_pageLeftAll">
                    <img src={Img2} alt=" " className="aboutImg"></img>
                    </div>
                </div>
                <div className="A_pageRight">
                    <div className="A_pageRightAll">
                        <h4 className="title"> About Me</h4>
                        <h3 className="selfTitle"> 
                            Passionate Computer Science and Engineering Graduate | Avid Reader, Skilled Gamer, Fitness Enthusiast, 
                            Fearless Skateboarder, and Aspiring Guitarist 
                        </h3>
                        <p className="biography"> 
                            From a young age, my fascination with computers was ignited when I was 
                            introduced to the world of gaming. It wasn't until Junior year of High school that I had the opportunity 
                            to embark on my first programming course, and from that moment on, my passion for coding has only
                            grown stronger. Proficient in C++ and Python, I have a natural ability to grasp new concepts quickly and 
                            efficiently. My drive to excel in the field pushes me to continuously seek out opportunities that will expand 
                            my knowledge and exposure within the industry. As I continue on this exhilarating journey, I envision a future
                            where I contribute my skills and creativity to impactful projects and collaborative ventures.
                            I am eager to be part of the ever-evolving landscape of technology, and I hope you will join me in shaping 
                            that future. Together, we can make remarkable advancements and inspire change through the power of code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}