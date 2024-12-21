import ReactDOM from "react-dom/client";
import './App.css';
import logo from './components/images/logo.jpg';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { Abilities } from './components/abilities';

  );
}

function App() {
  return (
      <div className="App">
      <Header/>
      <Welcome/>
      <Abilities/>

      <div className='latestWorks w-[100vw] h-[100vh] flex items-center flex-col mt-[12vh]'>
        <h1 className="w-[319px] h-[75px] font-nunito font-bold text-[55px] leading-[75px] tracking-[0.003em] text-[#377DFF] whitespace-nowrap">Latest Works</h1>
        <p className='text-center w-[674px h-[67px] font-quicksand normal text-[#464646] font-semibold font-[20px] leading-[34px]'>all projects that we have already done , proven can help to use more <br></br> comfortable, then can used by client from our business</p>
        


      </div> 
  )
   
export default App;
