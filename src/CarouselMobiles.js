import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Carousel.css";
import m1 from './images/m1.jpeg';
import mb1 from './images/mb1.jpg';
import mb2 from './images/mb2.jpg';
import mb3 from './images/mb3.jpg';
import mb4 from './images/mb4.jpg';
import mb5 from './images/mb5.jpg';

function CarouselMobiles(){
    return (
    <div className="carousel">

       <AliceCarousel className="carousel_image"  autoHeight={true}   autoPlay={true}  touchTracking={true} infinite={true}  autoPlayInterval="3000"  autoPlayStrategy="none" activeIndex="1"  mouseTracking={true} touchMoveDefaultEvents={true}  disableButtonsControls={true} keyboardNavigation={true}>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3C9jo5t"}} > 
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3C9jo5t"}} src={mb1} alt="m"/>
          </div> 
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3C9jo5t"}} > 
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3C9jo5t"}} src={m1} alt="m"/>
           </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3pzrL5j"}} > 
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3pzrL5j"}} src={mb2} alt="m"/>
           </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/35q5Pm0"}} > 
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/35q5Pm0"}} src={mb3} alt="m"/>
          </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3IJ5SaY"}} > 
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3IJ5SaY"}} src={mb4} alt="m"/>
          </div>
          <div className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3sDXjbP"}} > 
           <img className="carousel_image" onClick={() => {window.location.href="https://amzn.to/3sDXjbP"}} src={mb5} alt="m"/>
          </div>

       </AliceCarousel>
    </div>
    );
}
export default CarouselMobiles;