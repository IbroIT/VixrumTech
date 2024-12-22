import ReactDOM from "react-dom/client";
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { Abilities } from './components/abilities';
import ProjectsShowing from './components/ProjectsShowing';
import Offer from './components/Offer';
import ContactForm from './components/ContactForm';


      
=======


function About() {
  return <h1>This page will be made Ibro</h1>;
}

function Projects() {
  return <h1>This page will be made Iliyar</h1>;
}

function Navbar() {
  return (
    <nav className='header'>
      <div className='LogoImage'>
        <img src={logo} alt="" />
      </div>
      <div className='navSystem'>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
        <span className='Contact'>Contact us</span>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <Header/>
      <Welcome />
      <Abilities />
      <ProjectsShowing/>
      <Offer/>
      <ContactForm/>

    </div>
  );
}


=======
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
