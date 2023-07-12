import { Children } from "react"

export default function Nav(){
    return(
    <nav className="Nav">
        <a href ="/" className="Title">Main Page</a>
        <ul>
            <Link href="/aboutme">AboutMe</Link>
            <Link href="/LinkedIn">LinkedIn</Link>
            <Link href="/GitHub">GitHub</Link>
            <li>
                <a href="/test">Test</a>
            </li>
        </ul>
    </nav>
    )
}

// When Children, stops working?
function Link({href,...props}){
    const path= window.location.pathname

    return(
        <li className={path===href ? "active": ""}>
            <a href={href} {...props}></a>
        </li>
    )
}