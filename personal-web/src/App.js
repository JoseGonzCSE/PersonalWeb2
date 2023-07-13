import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import{Route,Routes} from "react-router-dom"


function App() {
  return (
    <>
      <Nav/>
      <div className="Content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
