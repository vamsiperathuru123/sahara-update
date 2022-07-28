import React,{useState} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

import saharahome from './images/saharahome.jpeg';
import headphones from "./images/headphones.jpg";

import homeb2 from "./images/homeb2.jpg";
import homeb3 from "./images/homeb3.jpg";
import homeb4 from "./images/homeb4.png";
import homeb5 from "./images/homeb5.jpg";

import homeb6 from "./images/homeb6.jpg";
import homeb7 from "./images/homeb7.jpg";
import homeb8 from "./images/homeb8.jpg";
import homeb9 from "./images/homeb9.jpg";


import { Link } from "react-router-dom";
import "./Navlinks.css";


function CarouselHome(){
   const[show,setShow]=useState(false)


    return (
    <div className="carousel">

       <AliceCarousel className="carousel_image" autoHeight={true}   autoPlay={true}  touchTracking={true} infinite={true}  autoPlayInterval="3000"  autoPlayStrategy="none" activeIndex="1"  mouseTracking={true} touchMoveDefaultEvents={true}  disableSlideInfo={true} disableButtonsControls={true} keyboardNavigation={true}>
         
          <button  className="carousel_image_btn " onClick={()=>setShow(!show)}>
               <img className="carousel_image"  src={saharahome} alt="h"/>
              {show?<Link className="V_button_Home" to="/Sahara">Go to Sahara Page </Link>:null}
          </button>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3wo4wiF"}}>
             <img className="carousel_image"  onClick={() => {window.location.href="https://amzn.to/3wo4wiF"}} src={homeb7}  alt="h"/>
           </div>
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/34Xgu7y"}}>
             <img className="carousel_image"  onClick={() => {window.location.href="https://amzn.to/34Xgu7y"}} src={homeb8}  alt="h"/>
           </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3Jsfzek"}}>
             <img className="carousel_image"  onClick={() => {window.location.href="https://amzn.to/3Jsfzek"}} src={homeb5}  alt="h"/>
           </div>
          
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3IIWiVJ"}}>
             <img className="carousel_image"  onClick={() => {window.location.href="https://amzn.to/3IIWiVJ"}} src={homeb6}  alt="h"/>
           </div>
         
         
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3vuEYA0"}}>
             <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3vuEYA0"}} src={homeb2} alt="h"/>
           </div>
           
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3CVKgpW"}}>
             <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3CVKgpW"}} src={homeb4} alt="h"/>
           </div>

           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/35vNJix"}}>
             <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/35vNJix"}} src={homeb3} alt="h"/>
           </div>
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/34c527S"}}>
              <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/34c527S"}} src={headphones} alt="h"/>
           </div>
           <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3L53tbF"}}>
              <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3L53tbF"}} src={homeb9} alt="h"/>
           </div>
          
           
       </AliceCarousel>
    </div>
    );
}
export default CarouselHome;