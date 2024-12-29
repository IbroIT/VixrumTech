import './App.css';
import React from "react";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Company from './components/Company';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';


function App() {
  
  return (
    <div className='Appp'>
      <Header />
      <Main />
      <Projects />
      <Company />
      <Skills />
    </div>
  )

}

export default App;
