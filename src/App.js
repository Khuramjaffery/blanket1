import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import Popular from "./Components/Popular";
import Sigup from "./Components/Sigup";




import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Team from "./Components/Team";
import About from "./Components/About";

function App() {
  return (
    <>
 
 
  <Navbar/>

  <Routes>
    <Route path="/" element={<Home/>} ></Route>
    <Route path="/service"  element={<Services/>} ></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/signup" element={<Sigup/>} ></Route>
    <Route path="/team" element={<Team/>}></Route>
  </Routes>
 
  
  
 
 
  <Footer/>
  <Footer2/>
  </>
  );
}

export default App;
