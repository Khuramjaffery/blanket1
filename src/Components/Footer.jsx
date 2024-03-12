import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
    return (
      <>
     <div className="footer1">
<div className="detail">
        <div className="logo">
            <img src="https://blank-slate-app.netlify.app/img/Frame%207.svg" alt="" />
        </div>
        <div className="desc">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatem in doloremque cupiditate cumque eius quis minima expedita pariatur tempore!</p>
        </div>
        </div>
        <div className="footer-link">
            <p className="p" >Courses</p>
            <ul>
<li><Link to="/about">About</Link></li>
<li><Link to="/">Courses</Link></li>
<li><a href="">Events</a></li>
<li><a href="">Career</a></li>
<li><a href="">Become a Teacher</a></li>
<li><a href="">Contact</a></li>

            </ul>
        </div>
        <div className="search">
            <p className="heading">Subscribe</p>
   <input className="btn " placeholder="search" type="search" name="" id="" />
   <button className="btn1">Search</button>
   <p>Lorem ipsum dolor sit amet consectetur, pariatur tempore!</p>

        </div>

     </div>
   
    </>
    );
  }
  
  export default Footer;
  