import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Patner from "./Component/Patner/Patner";
import About from  "./Component/About/About";
import EventSale from './Component/EventSale/EventSale';
import Roadmap from './Component/RoadMap/Roadmap';
import Contact from "./Component/Contact/Contact";
import Why from './Component/Why/Why';
import Footer from "./Component/Footer/Footer"
import Progress from "./Component/Tokenomics/Progress";


function App() {
  return (
   <>
      <Navbar/>
      <Home/>
      <Patner/>
      <About/>
      <Why/>
      <EventSale/>
      <Progress/>
      <Roadmap/>
       <Contact/>
       <Footer/>
       
   </>
  );
}

export default App;
