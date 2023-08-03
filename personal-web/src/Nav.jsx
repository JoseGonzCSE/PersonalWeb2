import { Children } from "react"
import { Link,useMatch,useResolvedPath} from "react-router-dom"
import React from 'react';

export default function Nav({aboutMeRef,contactRef}){

    const handleScrollToAboutMe = () => {
        
        if (aboutMeRef && aboutMeRef.current) {
            aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleScrollToContact = () => {
        if (contactRef && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
    <nav className="Nav">
        <Link to ="/" className="Title">Welcome!</Link>
        <ul>
            <button className="NavButton" onClick={handleScrollToAboutMe}>About Me</button>
            <button className="NavButton" onClick={handleScrollToContact}>Skills</button>
            <Clink to="https://www.linkedin.com/in/jose-gonzalez-424543231/" target="_blank" rel ="noreferrer" >LinkedIn</Clink>
            <Clink to="https://github.com/JoseGonzCSE" target="_blank" rel ="noreferrer">GitHub</Clink>
        </ul>
    </nav>
    )
}

function Clink({to,...props}){
    const resolvedPath=useResolvedPath(to)
    const Active= useMatch({path:resolvedPath.pathname,end:true})
    return(
        <li className={Active ? "active": ""}>
            <Link to={to} {...props}></Link>
        </li>
    )
}

