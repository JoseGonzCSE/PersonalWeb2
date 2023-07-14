import { Children } from "react"
import { Link,useMatch,useResolvedPath} from "react-router-dom"
export default function Nav(){
    return(
    <nav className="Nav">
        <Link to ="/" className="Title">Main Page</Link>
        <ul>
            <Clink to="/aboutme">AboutMe</Clink>
            <Clink to="https://www.linkedin.com/in/jose-gonzalez-424543231/" target="_blank" rel ="noreferrer" >LinkedIn</Clink>
            <Clink to="https://github.com/JoseGonzCSE" target="_blank" rel ="noreferrer">GitHub</Clink>
        </ul>
    </nav>
    )
}

// When Children, stops working?
function Clink({to,...props}){
    const resolvedPath=useResolvedPath(to)
    const Active= useMatch({path:resolvedPath.pathname,end:true})
    return(
        <li className={Active ? "active": ""}>
            <Link to={to} {...props}></Link>
        </li>
    )
}