import React, { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
    const[isMobile , setIsMobile]=useState(false);
    return (
      <div className="nav">
        <div className="logo">
            <img src="https://blank-slate-app.netlify.app/img/Frame%207.svg" alt="" />
        </div>
        <div className={isMobile ? "mobile-nav-link" : "nav-link"}
    onClick={()=>setIsMobile(false)}   >
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/signup" className="signup">Sign Up</Link></li>

            </ul>
        </div>
   
        <button className="menu-mobile-icon "
        onClick={()=>setIsMobile(!isMobile)}>
          {isMobile ? (<i class="fa-solid fa-xmark"></i>) :<i class="fa-solid fa-bars"></i>}</button>
   
      </div>
    );
  }
  
  export default Navbar;
  