import './Home.css'
import csslogo from './Imgs/css-file.png'
import cLogo from './Imgs/development.png'
import djangoLogo from './Imgs/django.png'
import htmlLogo from './Imgs/html.png'
import javascriptLogo from './Imgs/javascript.png'
import reactLogo from './Imgs/react.png'
import pythonLogo from './Imgs/python.png'
import MeThree from './Imgs/MeThree.jpg'
import React  from 'react';

export default function Home(){
    return (
            <div className='infoBox'>
                <div className='pageLeft'>
                    <div className='pageLeftAll'>
                        <h2 className="main">Pleasure to meet you, name's</h2>
                        <h1 className="name"> Jose 'Andres' Gonzalez</h1>
                        <p className="subText">Recent graduate in Computer Science and Engineering located in San Francisco, CA </p>
                        <div className='skillContainer'>
                            <p className="skills">Proficiency |</p>
                            <div className="logos">
                                <img className= "Logo1" src={pythonLogo} alt="pythonLogo"/>
                                <img className= "Logo2" src={djangoLogo} alt="DjangoLogo"/>
                                <img className= "Logo3" src={cLogo} alt="cLogo"/>
                                <img className= "Logo4" src={htmlLogo} alt="htmlLogo"/>
                                <img className= "Logo5" src={csslogo} alt="csslogo"/>
                                <img className= "Logo6" src={javascriptLogo} alt="javascriptLogo"/>
                                <img className= "Logo7" src={reactLogo} alt="reactLogo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pageRight'></div>
                    <img src={MeThree} alt=" " className="imgMe"></img>
            </div>
    
    )
}