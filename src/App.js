import './App.css';
import React from "react";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Company from './components/Company';
import  Skills  from './components/Skills';
import Foter from './components/Foter';
import ProjectsSection from './components/ProjectsSection';


function App() {
  
  return (
    <div className='Appp'>
      <Header />
      <Main />
      <ProjectsSection />
      <Company />
      <Skills />
      <Foter />
    </div>
  )

}

export default App;
