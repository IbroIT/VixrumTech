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

      <div className='latestWorks w-[100vw] h-[100vh] flex items-center flex-col mt-[12vh]'>
        <h1 className="w-[319px] h-[75px] font-nunito font-bold text-[55px] leading-[75px] tracking-[0.003em] text-[#377DFF] whitespace-nowrap">Latest Works</h1>
        <p className='text-center w-[674px h-[67px] font-quicksand normal text-[#464646] font-semibold font-[20px] leading-[34px]'>all projects that we have already done , proven can help to use more <br></br> comfortable, then can used by client from our business</p>
        


      </div> 
      </div>

  )
}

export default App;
