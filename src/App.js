import ReactDOM from "react-dom/client";
import './App.css';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { Abilities } from './components/abilities';

function About() {
  return <h1>
    This page will be made Ibro
  </h1>;
}
function Projects() {
  return <h1>
    This page will be made Iliyar
  </h1>;
}



function Navbar() {
  return (
    <nav className='header'>
      <div className='LogoImage'>
             <img src={logo} alt="" />
        </div>
        <div className='navSystem'>
            <NavLink to="/"  className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}> About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
            <span className='Contact'>Contact us</span>
        </div>
    </nav>
  )}
  
import ProjectsShowing from './components/ProjectsShowing';
import Offer from './components/Offer';
import ContactForm from './components/ContactForm';

function App() {
  return (
      <div className="App">
      <Header/>
      <Welcome/>
      <Abilities/>
      <ProjectsShowing/>
      <Offer/>
      <ContactForm/>
      
    </div>

  );

}

export default App;
