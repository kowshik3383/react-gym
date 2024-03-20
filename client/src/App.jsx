

import "./App.css";

import { Parallax } from "react-parallax";


import ExerciseList from "./components/ExerciseList";
import bg123 from "./assets/bg123.jpg";
import Result from "./components/Result";
import Footer from  "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  
  return (
    <>
      
      <Navbar/>
     
     
     <Parallax className="" strength={200} bgImage={bg123}>
       <ExerciseList/>
      </Parallax>
     
     
      <Parallax >
        <Result />
      </Parallax>
      <Footer/>
      
   
      
    </>
  );
};

export default App;
