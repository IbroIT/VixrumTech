import ReactDOM from "react-dom/client";
import './App.css';
import logo from './components/images/logo.jpg';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { Abilities } from './components/abilities';

  
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
