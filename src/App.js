import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { Abilities } from './components/abilities';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Abilities/>
    </div>
  );
}

export default App;
