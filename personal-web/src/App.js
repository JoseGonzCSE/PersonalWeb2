import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';

function App() {
  let Page
  switch(window.location.pathname){
    case "/":
      Page=Home
      break
    case "/aboutme":
      Page=AboutMe
      break
  }
  return (
    <>
      <Nav/>
      <div className="Content">
        <Page/>
      </div>
    </>
  )
}

export default App;
